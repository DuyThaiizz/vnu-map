// js/indoor.js

// Biến toàn cục dùng chung với map.js
window.currentActiveBuilding = ""; 

// ==========================================
// 1. DỮ LIỆU TÒA NHÀ (A2, B2, C1)
// ==========================================

// --- KHỞI TẠO DỮ LIỆU C1 (KHOA PHÁP) ---
const c1Data = {
    totalFloors: 4,
    title: "Tòa C1 - Khoa Pháp (ULIS)",
    subtitle: "Sơ đồ bố trí phòng thi xét tuyển Ươm tạo Tài năng THPT 2024",
    floors: {
        4: [
            { name: "WC", class: "room-wc", row: 1, col: 1, rowSpan: 2, colSpan: 1 },
            { name: "407", class: "room-ulis", row: 1, col: 2, rowSpan: 2, colSpan: 1 },
            { name: "406", class: "room-ulis", row: 1, col: 3, rowSpan: 2, colSpan: 1 },
            { name: "405", class: "room-ulis", row: 1, col: 4, rowSpan: 2, colSpan: 2 },
            { name: "404", class: "room-ulis", row: 1, col: 6, rowSpan: 2, colSpan: 1 },
            { name: "403<br><span class='text-blue-700 text-[9px] font-bold uppercase'>Phòng chờ 2</span>", class: "room-ums", row: 1, col: 7, rowSpan: 2, colSpan: 1 },
            { name: "Thang", class: "room-stairs", row: 1, col: 8, rowSpan: 2, colSpan: 1 },
            { name: "402<br><span class='text-blue-700 text-[9px] font-bold uppercase'>Phòng chờ 1</span>", class: "room-ums", row: 1, col: 9, rowSpan: 2, colSpan: 2 },
            { name: "401", class: "room-ulis", row: 1, col: 11, rowSpan: 2, colSpan: 2 },
            { name: "Hành lang chung", class: "room-hallway", row: 3, col: 1, rowSpan: 1, colSpan: 12 }
        ],
        3: [
            { name: "WC", class: "room-wc", row: 1, col: 1, rowSpan: 2, colSpan: 1 },
            { name: "308", class: "room-ulis", row: 1, col: 2, rowSpan: 2, colSpan: 1 },
            { name: "307<br><span class='text-purple-700 text-[9px] font-bold'>PV 08</span>", class: "room-ums", row: 1, col: 3, rowSpan: 2, colSpan: 1 },
            { name: "306<br><span class='text-purple-700 text-[9px] font-bold'>PV 07</span>", class: "room-ums", row: 1, col: 4, rowSpan: 2, colSpan: 1 },
            { name: "305<br><span class='text-purple-700 text-[9px] font-bold'>PV 06</span>", class: "room-ums", row: 1, col: 5, rowSpan: 2, colSpan: 1 },
            { name: "304<br><span class='text-purple-700 text-[9px] font-bold'>PV 05</span>", class: "room-ums", row: 1, col: 6, rowSpan: 2, colSpan: 1 },
            { name: "HT 3<br><span class='text-purple-700 text-[9px] font-bold'>PV 04</span>", class: "room-ums", row: 1, col: 7, rowSpan: 2, colSpan: 1 },
            { name: "Thang", class: "room-stairs", row: 1, col: 8, rowSpan: 2, colSpan: 1 },
            { name: "303<br><span class='text-purple-700 text-[9px] font-bold'>PV 03</span>", class: "room-ums", row: 1, col: 9, rowSpan: 2, colSpan: 1 },
            { name: "302<br><span class='text-purple-700 text-[9px] font-bold'>PV 02</span>", class: "room-ums", row: 1, col: 10, rowSpan: 2, colSpan: 1 },
            { name: "301<br><span class='text-purple-700 text-[9px] font-bold'>PV 01</span>", class: "room-ums", row: 1, col: 11, rowSpan: 2, colSpan: 2 },
            { name: "Hành lang chung", class: "room-hallway", row: 3, col: 1, rowSpan: 1, colSpan: 12 }
        ],
        2: [
            { name: "WC", class: "room-wc", row: 1, col: 1, rowSpan: 2, colSpan: 1 },
            { name: "208", class: "room-ulis", row: 1, col: 2, rowSpan: 2, colSpan: 1 },
            { name: "207", class: "room-ulis", row: 1, col: 3, rowSpan: 2, colSpan: 1 },
            { name: "206", class: "room-ulis", row: 1, col: 4, rowSpan: 2, colSpan: 1 },
            { name: "205", class: "room-ulis", row: 1, col: 5, rowSpan: 2, colSpan: 1 },
            { name: "204", class: "room-ulis", row: 1, col: 6, rowSpan: 2, colSpan: 1 },
            { name: "Phòng GV<br><span class='text-red-600 text-[9px] font-bold'>HỘI ĐỒNG</span>", class: "room-ums border-red-400 border-2", row: 1, col: 7, rowSpan: 2, colSpan: 1 },
            { name: "Thang", class: "room-stairs", row: 1, col: 8, rowSpan: 2, colSpan: 1 },
            { name: "203", class: "room-ulis", row: 1, col: 9, rowSpan: 2, colSpan: 1 },
            { name: "202", class: "room-ulis", row: 1, col: 10, rowSpan: 2, colSpan: 1 },
            { name: "201", class: "room-ulis", row: 1, col: 11, rowSpan: 2, colSpan: 2 },
            { name: "Hành lang chung", class: "room-hallway", row: 3, col: 1, rowSpan: 1, colSpan: 12 }
        ],
        1: [
            { name: "WC", class: "room-wc", row: 1, col: 1, rowSpan: 2, colSpan: 1 },
            { name: "108", class: "room-ulis", row: 1, col: 2, rowSpan: 2, colSpan: 1 },
            { name: "107", class: "room-ulis", row: 1, col: 3, rowSpan: 2, colSpan: 1 },
            { name: "106", class: "room-ulis", row: 1, col: 4, rowSpan: 2, colSpan: 1 },
            { name: "105", class: "room-ulis", row: 1, col: 5, rowSpan: 2, colSpan: 1 },
            { name: "104", class: "room-ulis", row: 1, col: 6, rowSpan: 2, colSpan: 1 },
            { name: "HT 1", class: "room-ums", row: 1, col: 7, rowSpan: 2, colSpan: 1 },
            { name: "Thang", class: "room-stairs", row: 1, col: 8, rowSpan: 2, colSpan: 1 },
            { name: "103", class: "room-ulis", row: 1, col: 9, rowSpan: 2, colSpan: 1 },
            { name: "102", class: "room-ulis", row: 1, col: 10, rowSpan: 2, colSpan: 1 },
            { name: "101", class: "room-ulis", row: 1, col: 11, rowSpan: 2, colSpan: 2 },
            { name: "Hành lang chung", class: "room-hallway", row: 3, col: 1, rowSpan: 1, colSpan: 12 },
            { name: "LỐI VÀO ⬆️", class: "room-stairs border-dashed bg-white text-red-600 border-red-400 shadow-none text-xs", row: 4, col: 8, rowSpan: 1, colSpan: 2 }
        ]
    }
};

// --- GỘP TẤT CẢ DỮ LIỆU (A2, B2, C1) VÀO BIẾN CHÍNH ---
const INDOOR_DATA = {
    "a2": { totalFloors: 8, title: "Giảng đường A2 - ĐHQGHN", subtitle: "Trường THCS Ngoại ngữ (UMS) & Giảng đường ULIS",
        floors: {
            8: [
                { name: "P.804", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.803", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.802", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.801", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" },
                { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 5, colSpan: 1, class: "room-hallway" },
                { name: "P.806", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.807", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.808", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.810", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.811", row: 7, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }
            ],
            7: [ { name: "P.704", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.703", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.702", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.701", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" }, { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "P.706", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.707", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.708", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.710", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.711", row: 7, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" } ],
            6: [ { name: "P.604", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.603", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.602", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.601", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" }, { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "P.606", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.607", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.608", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.610", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.611", row: 7, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" } ],
            5: [ { name: "P.504", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.503", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.502", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.501", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" }, { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "P.506", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.507", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.HĐ*", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.510", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.511", row: 7, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.512", row: 8, col: 10, rowSpan: 1, colSpan: 1, class: "room-ulis" } ],
            4: [ { name: "P.404", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.403", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.402", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.401", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" }, { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 4, colSpan: 1, class: "room-hallway" }, { name: "P.406", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.407", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.408", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.410", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" } ],
            3: [ { name: "P.304", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.303", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.302", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.301", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" }, { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 4, colSpan: 1, class: "room-hallway" }, { name: "P.306", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.307", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.308", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.310", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" } ],
            2: [ { name: "P.204", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.203", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.202", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.201", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" }, { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 4, colSpan: 1, class: "room-hallway" }, { name: "P.206", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.207", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.208", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.210", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" } ],
            1: [ { name: "P.104", row: 1, col: 4, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.103", row: 1, col: 5, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.102", row: 1, col: 6, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.101", row: 1, col: 7, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "WC", row: 1, col: 8, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "Thang", row: 1, col: 9, rowSpan: 2, colSpan: 1, class: "room-stairs" }, { name: "Hành lang", row: 2, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" }, { name: "Hành lang", row: 3, col: 9, rowSpan: 6, colSpan: 1, class: "room-hallway" }, { name: "P.105", row: 3, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.106", row: 4, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.107", row: 5, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.108", row: 6, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.110", row: 7, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "P.111", row: 8, col: 10, rowSpan: 1, colSpan: 1, class: "room-ums" } ]
        } },
    "b2_hybrid": {  totalFloors: 5, title: "Giảng đường B2 - ULIS & VNU-LS", subtitle: "Trường ĐH Ngoại Ngữ & Khoa Luật ĐHQGHN",
        floors: {
            5: [ { name: "P.513", row: 1, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.512", row: 2, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.511", row: 3, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.510", row: 4, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC N/N", row: 1, col: 9, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "P.501", row: 2, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.502", row: 3, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.503", row: 4, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.504", row: 5, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.509", row: 6, col: 4, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.508", row: 6, col: 5, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.507", row: 6, col: 6, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.506", row: 6, col: 7, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.505", row: 6, col: 8, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "Hành lang", row: 1, col: 4, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 1, col: 8, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 5, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" } ],
            4: [ { name: "P.413", row: 1, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.412", row: 2, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.411", row: 3, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.410", row: 4, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC N/N", row: 1, col: 9, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "P.401", row: 2, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.402", row: 3, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.403", row: 4, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "Ban CĐ", row: 5, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.409", row: 6, col: 4, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.408", row: 6, col: 5, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.407", row: 6, col: 6, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.406", row: 6, col: 7, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "HĐ Thi", row: 6, col: 8, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "Hành lang", row: 1, col: 4, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 1, col: 8, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 5, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" } ],
            3: [ { name: "P.313", row: 1, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.312", row: 2, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.311", row: 3, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.310", row: 4, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC N/N", row: 1, col: 9, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "P.301", row: 2, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.302", row: 3, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.303", row: 4, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.304", row: 5, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.309", row: 6, col: 4, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.308", row: 6, col: 5, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.307", row: 6, col: 6, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.306", row: 6, col: 7, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "Y Tế", row: 6, col: 8, rowSpan: 1, colSpan: 1, class: "room-ums" }, { name: "Hành lang", row: 1, col: 4, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 1, col: 8, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 5, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" } ],
            2: [ { name: "P.213", row: 1, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.212", row: 2, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.211", row: 3, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.210", row: 4, col: 3, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "WC N/N", row: 1, col: 9, rowSpan: 1, colSpan: 1, class: "room-wc" }, { name: "P.201", row: 2, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.202", row: 3, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.203", row: 4, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "P.204", row: 5, col: 9, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "Phòng NV", row: 6, col: 4, rowSpan: 1, colSpan: 4, class: "room-ums" }, { name: "P.205", row: 6, col: 8, rowSpan: 1, colSpan: 1, class: "room-ulis" }, { name: "Hành lang", row: 1, col: 4, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 1, col: 8, rowSpan: 5, colSpan: 1, class: "room-hallway" }, { name: "Hành lang", row: 5, col: 4, rowSpan: 1, colSpan: 5, class: "room-hallway" } ]
        } },
    
    // Đã thêm cấu hình để map JS có thể tự động nhận dạng từ nhiều tên gọi khác nhau
    "c1": c1Data,
    "tòa c1": c1Data,
    "nhà c1": c1Data
};

// ==========================================
// 2. LOGIC ĐIỀU KHIỂN INDOOR MAP
// ==========================================

window.openIndoorMap = function() {
    const data = INDOOR_DATA[window.currentActiveBuilding];
    if (!data) return;

    // Cập nhật text Modal
    document.getElementById('indoor-title').textContent = data.title;
    document.getElementById('indoor-subtitle').textContent = data.subtitle;
    
    // Tạo nút chọn tầng
    const selector = document.getElementById('floorSelector');
    selector.innerHTML = ''; 
    const floorsArray = Object.keys(data.floors).map(Number).sort((a, b) => b - a);
    const defaultFloor = floorsArray[floorsArray.length - 1]; // Tầng thấp nhất

    floorsArray.forEach(floorNum => {
        const btn = document.createElement('div');
        btn.className = `floor-btn ${floorNum === defaultFloor ? 'active' : ''}`;
        btn.textContent = `Tầng ${floorNum}`;
        btn.onclick = () => window.changeFloor(floorNum, btn);
        selector.appendChild(btn);
    });
    
    window.renderFloorPlan(defaultFloor);
    document.getElementById('indoorModal').classList.add('active');
}

window.closeIndoorMap = () => document.getElementById('indoorModal').classList.remove('active');

window.changeFloor = function(floorNum, btnElement) {
    document.querySelectorAll('.floor-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');
    document.getElementById('currentFloorTitle').textContent = `Tầng ${floorNum}`;
    window.renderFloorPlan(floorNum);
}

// Hàm gán icon tự động cho các phòng
function getRoomIcon(roomName) {
    if(roomName.includes('WC')) return '🚻<br>';
    if(roomName.includes('Thang') || roomName.includes('Cầu')) return '🛗<br>';
    return ''; // Mặc định không có icon
}

window.renderFloorPlan = function(floorNum) {
    const grid = document.getElementById('floorPlanGrid');
    grid.innerHTML = ''; 

    const data = INDOOR_DATA[window.currentActiveBuilding];
    const layout = data?.floors[floorNum] || [];

    if(layout.length === 0) {
        grid.innerHTML = '<div style="grid-column: span 12; text-align: center; padding: 20px;">Đang cập nhật...</div>';
        return;
    }

    layout.forEach(room => {
        const roomDiv = document.createElement('div');
        roomDiv.className = `room ${room.class}`;
        // Thiết lập CSS Grid Area từ thông số JSON
        roomDiv.style.gridArea = `${room.row} / ${room.col} / ${room.row + room.rowSpan} / ${room.col + room.colSpan}`;
        roomDiv.innerHTML = `${getRoomIcon(room.name)} ${room.name}`;
        grid.appendChild(roomDiv);
    });
}