<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$filePath = "export.geojson";

// ==========================================
// 1. KHO DỮ LIỆU ĐỊA PHƯƠNG (LOCAL DATA)
// ==========================================
$locationInfo = [
    "trung tâm thương mại indochina" => [ "img" => "anh/indochina.jpg", "desc" => "<p>Khu tổ hợp mua sắm, giải trí và ẩm thực hiện đại.</p>" ],
    "ký túc xá"                      => [ "img" => "anh/ktx.jpg",       "desc" => "<p>Khu nội trú dành cho sinh viên.</p>" ],
    "tòa b2"                         => [ "img" => "anh/toa_b2.jpg",    "desc" => "<p>Giảng đường chung ULIS và VNU-LS.</p>" ],
    "ulis"                           => [ "img" => "anh/ulis_chung.jpg","desc" => "<p>Khuôn viên trường Đại học Ngoại Ngữ.</p>" ],
    "uet"                            => [ "img" => "anh/uet_chung.jpg", "desc" => "<p>Khuôn viên trường Đại học Công Nghệ.</p>" ]
];

// ==========================================
// 2. HÀM HỖ TRỢ
// ==========================================
function getZoneFallback($name) {
    if (strpos($name, 'pháp') !== false || preg_match('/c[1-6]/', $name) || strpos($name, 'cnn') !== false || preg_match('/a[123568]/', $name) || strpos($name, 'ulis') !== false) return 'ulis';
    if (preg_match('/g[1-3]/', $name) || preg_match('/e[235]/', $name) || strpos($name, 'uet') !== false || strpos($name, 'công nghệ') !== false) return 'uet';
    return 'default';
}

// ==========================================
// 3. XỬ LÝ API
// ==========================================
if (file_exists($filePath)) {
    $data = json_decode(file_get_contents($filePath), true);

    if (isset($data['features'])) {
        foreach ($data['features'] as &$feature) {
            $name = isset($feature['properties']['name']) ? mb_strtolower($feature['properties']['name'], 'UTF-8') : '';
            
            $img = "anh/vnu_default.jpg";
            $desc = "<p>Thông tin chi tiết đang được cập nhật.</p>";
            $matched = false;

            // Cách 1: Tìm trong mảng thủ công
            foreach ($locationInfo as $key => $info) {
                if ($name !== '' && strpos($name, $key) !== false) {
                    $img = $info['img'];
                    $desc = $info['desc'] ?? $desc;
                    $matched = true; break;
                }
            }

            // Cách 2: Tự động tra cứu thư mục ảnh (Bao gồm fix lỗi dư đuôi .jpg)
            if (!$matched && $name !== '') {
                $paths = ["anh/" . $name . ".jpg", "anh/" . $name . ".jpg.jpg"];
                foreach ($paths as $p) {
                    if (file_exists($p)) { $img = $p; $matched = true; break; }
                }
            }

            // Cách 3: Fallback ảnh theo trường
            if (!$matched) {
                $zone = getZoneFallback($name);
                if (isset($locationInfo[$zone])) { $img = $locationInfo[$zone]['img']; }
            }

            $feature['properties']['vnu_img'] = $img;
            $feature['properties']['vnu_desc'] = $desc;
        }
    }
    echo json_encode($data);
} else {
    http_response_code(404);
    echo json_encode(["error" => "Không tìm thấy dữ liệu vệ tinh."]);
}
?>