const PRODUCTS = [
  [
    {
      product_title:
        "áo sơ mi nữ tay ngắn chất thô thêu nơ mặc đi học đi làm phong cách trẻ trung A289 SUTANO",
      product_image:
        "https://down-bs-vn.img.susercontent.com/sg-11134201-7rdx3-m0jwedp7h8s0c3.webp",
      product_sold: "6k lượt bán",
      product_link: "https://s.shopee.vn/8AJpofETdB",
    },
    {
      product_title:
        "Áo thun nữ form rộng Việt Nam tôi yêu Miucho BST cổ tròn vải cotton 4c 220gsm thoáng mát in mi",
      product_image:
        "https://down-zl-vn.img.susercontent.com/sg-11134201-7rfi6-ma0uc5y5oy7g59.webp",
      product_sold: "11,4k lượt bán",
      product_link: "https://s.shopee.vn/50Mo2rzbJk",
    },
    {
      product_title:
        "Áo Thun Nữ Dáng Rộng Lệch Vai, Áo Cộc Tay Cổ Lệch Chất Thun Lông Thỏ Form Rộng Cho Nữ - SU.XING- S57",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m5x2sk3jxlab1b.webp",
      product_sold: "11k lượt bán",
      product_link: "https://s.shopee.vn/VuOgcpSP6",
    },
    {
      product_title:
        "Áo Sơ Mi Nữ Basic PEY Kẻ Sọc Thêu – Dáng Rộng, Tặng Kèm Khoác Thủy Thủ Xinh Xắn",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9eyfasjcakn65.webp",
      product_sold: "1,8k lượt bán",
      product_link: "https://s.shopee.vn/7pgzQ89X5P",
    },
    {
      product_title:
        "Áo Babydoll Nữ AIMEE Cổ Bèo Tay Bồng – Thô Boil Mềm, Dáng Rộng Chuẩn Hàn",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9eng2vk693b14.webp",
      product_sold: "1,8k lượt bán",
      product_link: "https://s.shopee.vn/20jCTQs5fv",
    },
    {
      product_title:
        "Áo Babydoll Caily Nữ Cổ Sen Hoa Nhí – Dáng Rộng, Phối Dây Eo, Phong Cách Retro",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9eyugmukh8kbc.webp",
      product_sold: "1,8k lượt bán",
      product_link: "https://s.shopee.vn/7ARIcwpLE4",
    },
    {
      product_title:
        "[CÓ MÚT] Áo ba lỗ nữ khuy cài kèm mút ngực áo 2 dây nữ bản to kiểu dáng gợi cảm chất vải thun tăm co giãn A520 PANOSI",
      product_image:
        "https://down-zl-vn.img.susercontent.com/sg-11134201-7rdvd-m0jwrcmu4zcuff.webp",
      product_sold: "14,9k lượt bán",
      product_link: "https://s.shopee.vn/8KdG17ATw2",
    },
    {
      product_title:
        "Áo Crotop Cổ Yếm Cột Dây Hở Lưng Chất Linen Siêu Hot, Áo Cổ Yếm Năng Động Basic Phối Mọi Outfit Mùa Hè Hot Trend 2025",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134201-7ra0g-m9hka4glcdc75f.webp",
      product_sold: "2,7k lượt bán",
      product_link: "https://s.shopee.vn/9pS3ntHUvq",
    },
    {
      product_title:
        "Áo Khoác Len Cadigan Mỏng Dáng Ngắn Tay Dài Phối Viền Sóng Tặng Charm Hoa Dễ Thương Len Dệt Gân Hàng Qccc Orangecloset",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m8rd5lrfrp7yf8.webp",
      product_sold: "2k lượt bán",
      product_link: "https://s.shopee.vn/5fcUqFjwu8",
    },
    {
      product_title:
        "Áo Khoác Len Cadigan Mỏng Dáng Ngắn Tay Dài Phối Viền Voan Xòe Dễ Thương Khoác Ngoài Len Dệt Gân Hàng Qccc Orangecloset",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9onnmxnzjus57.webp",
      product_sold: "2k lượt bán",
      product_link: "https://s.shopee.vn/1BA5U0WA5Y",
    },
    {
      product_title:
        "Áo baby tee in chữ hài hước Miucho BST cổ tròn vải cotton 4c thoáng mát in basic",
      product_image:
        "https://down-zl-vn.img.susercontent.com/sg-11134201-7rfgu-ma0uss5aayjdff.webp",
      product_sold: "7,3k lượt bán",
      product_link: "https://s.shopee.vn/60FLEui1Bx",
    },
    {
      product_title:
        "( Áo chống nắng hai lớp) áo chống nắng 2 lớp tay và thân áo chống tia UV Huyen Thanh Shopp",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m2dh4zgjoqsy84.webp",
      product_sold: "4,9k lượt bán",
      product_link: "https://s.shopee.vn/6AYlRFBQyR",
    },
    {
      product_title: "Áo Giselle Nữ Tay Ngắn Cổ V Phối Viền Ren Xinh Xắn",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lwtmtbh52uvv82.webp",
      product_sold: "18,7k lượt bán",
      product_link: "https://s.shopee.vn/20jCTbvxuZ",
    },
    {
      product_title:
        "Áo Chống Nắng Nữ Thun Lạnh CHỐNG TIA UV HÀNG LOẠI 1, Áo Nắng Ngắn, Áo Khoác Nắng",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m80m68f1vzpjae.webp",
      product_sold: "2,1k lượt bán",
      product_link: "https://s.shopee.vn/60FLEzXCPt",
    },
    {
      product_title: "Áo sơ mi thô form rộng 1 túi Hàn Quốc",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lvcm1wdjbx4476.webp",
      product_sold: "23,9k lượt bán",
      product_link: "https://s.shopee.vn/9UpDPS5jLC",
    },
    {
      product_title:
        "Áo Thun Nam Nữ Hình In Hello Kitty Dễ Thương Form Rộng Tay Lỡ Vải Cotton 2 chiều Full Tag Chuẩn, Áo Phông Form Rộng Hot",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134201-7ra0g-m8yj6cmjdnjif6.webp",
      product_sold: "2,3k lượt bán",
      product_link: "https://s.shopee.vn/9pS3o5ZGfX",
    },
    {
      product_title:
        "Áo croptop coquette kiểu acubi brandy nữ baby tee nơ màu hồng xanh đen bánh bèo thun tăm CT088",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lvkhzeurbhxt60.webp",
      product_sold: "13k lượt bán",
      product_link: "https://s.shopee.vn/2fytGxGitG",
    },
    {
      product_title:
        "Áo Thun Big Boxy Local Brand UME Form Rộng Tay Ngắn Cotton Cổ Tròn Nam Nữ Cartoon Hoạt Hình",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-ma2a1gdnwax09a.webp",
      product_sold: "1,9k lượt bán",
      product_link: "https://s.shopee.vn/1LTVgWmLLX",
    },
    {
      product_title:
        "Áo Ba Lỗ Khuy Cài Kèm Mút Ngực Nữ CAROLL, Áo Chất Thun Tăm co giãn 2 Dây Bản To Kiểu Dáng Gợi Cảm",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m78xi9r971iu45.webp",
      product_sold: "1,8k lượt bán",
      product_link: "https://s.shopee.vn/8KdG1SXPph",
    },
    {
      product_title:
        "Áo thun nữ cổ tròn ôm body chất thun zip co giãn mềm mịn hàng loại 1 - Áo thun cộc tay HiiNcloset - 121",
      product_image:
        "https://down-bs-vn.img.susercontent.com/vn-11134207-7ra0g-m6hwofeb79socd.webp",
      product_sold: "5k lượt bán",
      product_link: "https://s.shopee.vn/40UGrVvxpr",
    },
    {
      product_title:
        "Áo chống nắng nữ croptop chống tia cực tím UPF 50+ chống tia UV chất lụa nhẹ mát lạnh rộng freesize 70kg form ngắn",
      product_image:
        "https://down-bs-vn.img.susercontent.com/vn-11134207-7ra0g-m9zmui27f1bife.webp",
      product_sold: "26,6k lượt bán",
      product_link: "https://s.shopee.vn/5AgEFfzuzN",
    },
    {
      product_title:
        "Áo Chống Nắng Nữ, Áo Nắng Nữ, Áo Khoác Chống Nắng Chống Tia Cực Tím UPF 50+ Chất Lụa Băng Ôm Body Co Giãn Hottrend 2024",
      product_image:
        "https://down-bs-vn.img.susercontent.com/vn-11134207-7r98o-lu9h3kkh0ppb56.webp",
      product_sold: "15,3k lượt bán",
      product_link: "https://s.shopee.vn/5KzeS0Kjzh",
    },
    {
      product_title:
        "áo sơ mi nữ tay ngắn chất thô thêu nơ mặc đi học đi làm phong cách trẻ trung",
      product_image:
        "https://down-bs-vn.img.susercontent.com/sg-11134201-7rdx3-m0jwedp7h8s0c3.webp",
      product_sold: "6k lượt bán",
      product_link: "https://s.shopee.vn/10qfI45QQs",
    },
    {
      product_title:
        "Áo thun lệch vai xếp ly eo điệu đà áo trễ vai nữ thắt eo tay cộc chất vải tăm lông thỏ ôm body HA500",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9en3jbgz43m08.webp",
      product_sold: "33,5k lượt bán",
      product_link: "https://s.shopee.vn/30bjflOM7c",
    },
    {
      product_title:
        "Áo khoác chống nắng UMI cao cấp cho Nữ, dày dặn, Form trẻ trung, chống tia UV, Vải đanh mát, may kỹ",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m3ztqsjks41c49.webp",
      product_sold: "10,6k lượt bán",
      product_link: "https://s.shopee.vn/LayUsyQvH",
    },
    {
      product_title:
        "Áo Thun Nữ Dáng Rộng Lệch Vai Chất Lông Thỏ Mềm Mịn Không Xù, Áo Thun Nữ Form Rộng Lệch Vai Màu Sắc Hottrend 2025 A01",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134201-7ra0g-m98bteump3eqaf.webp",
      product_sold: "1k lượt bán",
      product_link: "https://s.shopee.vn/8pZWcWnfXh",
    },
    {
      product_title:
        "Áo babydoll linen kiểu xinh tay phồng tiểu thư công chúa bo thân nơ coquette ngực xinh xắn Lâm Tú",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m7w49q8ey06m3e.webp",
      product_sold: "35,3k lượt bán",
      product_link: "https://s.shopee.vn/6AYlReNx7y",
    },
    {
      product_title:
        "Áo Thun Lệch Vai Xếp Ly, Áo Kiểu Sườn Nhún Eo Điệu Đà, Áo Phông Form Vừa Chất Vải Co Dãn Mềm Mịn Miho House",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lyngddggq6ch5b.webp",
      product_sold: "48,8k lượt bán",
      product_link: "https://s.shopee.vn/9ACN1BTJYH",
    },
    {
      product_title:
        "Áo Thun Ngắn Tay Cổ Trễ Nhiều Màu Dành Cho Nữ Mùa Hè Phong Cách Mới MA124",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m1f56u72ry3c6b.webp",
      product_sold: "32,7k lượt bán",
      product_link: "https://s.shopee.vn/1LTVgoRfP6",
    },
    {
      product_title:
        "Áo thun ôm babytee cổ vuông DAZZI BRAND,áo thun nữ ôm body vải gân tăm lụa hàn co dãn 4 chiều A02",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m3c8w0zqo7c107.webp",
      product_sold: "35,4k lượt bán",
      product_link: "https://s.shopee.vn/8AJppOs2sw",
    },
    {
      product_title:
        "Áo thun trơn DAZZI BRAND form ôm Babytee💖Áo thun nữ body dáng dài thun gân tăm co dãn 4 chiều A01",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m6gngdko0gip8d.webp",
      product_sold: "54,1k lượt bán",
      product_link: "https://s.shopee.vn/8AJppQ4uS7",
    },
    {
      product_title:
        "Áo babydoll linen kiểu xinh tay phồng tiểu thư công chúa bo thân nơ coquette ngực xinh xắn 126 Store",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m73ov8fzzarcce.webp",
      product_sold: "13,9k lượt bán",
      product_link: "https://s.shopee.vn/AA4uD89TrV",
    },

    {
      product_title:
        "Bộ pijama cho nữ CỘC ĐÙI cổ sen MINBEAUTIFUL pha phối dễ thương nhiều màu-Đồ bộ ngủ freesize 38-60kg",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-ly3gkt2t9dhs65.webp",
      product_sold: "22,1k lượt bán",
      product_link: "https://s.shopee.vn/9ACN1KGsaP",
    },
    {
      product_title:
        "Đồ đi biển nam nữ cặp đôi nhóm gia đình set gồm áo và quần hoa lá chất Kate Thái mát mẻ | DONGPHUCSG",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lwfktwc2t8ezd7.webp",
      product_sold: "16,7k lượt bán",
      product_link: "https://s.shopee.vn/7Kkiq3LR2L",
    },
    {
      product_title:
        "Set dài tay,Bộ dài tay cho Nữ Áo Hai Lớp Cúc Cài size 40-60 kg quần xuông ống rộng cạp chun co dãn mặc thoải mái",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m6xekp80r4ns9b.webp",
      product_sold: "4,2k lượt bán",
      product_link: "https://s.shopee.vn/50Mo3oGBL2",
    },
    {
      product_title:
        "Ảnh Thật | Áo Sơmi Kẻ Sọc Thiết Kế Lệch Vai Form Dấu Quần Trẻ Trung Cá Tính",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134201-7ra0g-m8yh7w8l2pon77.webp",
      product_sold: "2,1k lượt bán",
      product_link: "https://s.shopee.vn/BHYIxxthZ",
    },
    {
      product_title:
        "Set Bộ Cộc ECOCHIC NEW LOGO Áo Phông Crop Quần Đùi Cạp Cao Chất Liệu Cao Cấp Chính Hãng ECO ON THE GO B157",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9grxydjiszo4d.webp",
      product_sold: "4,2k lượt bán",
      product_link: "https://s.shopee.vn/7ARIdqxiz2",
    },
    {
      product_title:
        "Set Đồ Ngủ Nữ, Bộ Pyjama Kẻ Caro Nhiều Màu Phong Cách Hàn Quốc Chất Xốp Mịn Mát",
      product_image:
        "https://down-zl-vn.img.susercontent.com/sg-11134201-7rd4w-lv43dnofdcuyae.webp",
      product_sold: "18,4k lượt bán",
      product_link: "https://s.shopee.vn/9UpDQAj116",
    },
    {
      product_title:
        "Set dài tay,Bộ dài tay cho Nữ chất vải thun tăm size 38-62 kg áo croptop quần ống đứng chất vải mềm mại co dãn thoải mái",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m6xf5crks9q041.webp",
      product_sold: "5,2k lượt bán",
      product_link: "https://s.shopee.vn/7V492Z2Q24",
    },
    {
      product_title:
        "Set Áo Sơ Mi Thêu Nơ Nhỏ Kèm Chân Váy Hai Tầng Xinh Xắn - Set nữ siêu xinh vải đũi lụa chân váy thêu nơ có quần bảo hộ",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134201-7ra0g-m98bpiprrl9q0b.webp",
      product_sold: "3k lượt bán",
      product_link: "https://s.shopee.vn/9ACN1eDgJ9",
    },
    {
      product_title:
        "Bộ Đồ Ngủ Caro BY CHANN (Tặng Kèm Charm) nhiều màu mặc nhà mùa hè, chất liệu cotton xốp (có size đến 80kg)",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m7ddafefzcxf19.webp",
      product_sold: "56,1k lượt bán",
      product_link: "https://s.shopee.vn/1BA5UzpiyL",
    },
    {
      product_title: "BỘ NGỦ NỮ CAXA 🦋 SET PIJAMA MẶC NHÀ 2 MÀU XANH CAM🦋",
      product_image:
        "https://down-zl-vn.img.susercontent.com/33f67a1c8c0cc6a279c0c13c0cb2a513.webp",
      product_sold: "121,1k lượt bán",
      product_link: "https://s.shopee.vn/3qAqfvER2Q",
    },
    {
      product_title:
        "Đồ ngủ pijama mặc cho nữ Cộc Đùi Thường,Đồ ngủ nữ,Đồ bộ mặc nhà,sét bộ pijama mặc nhà💖💖💖",
      product_sold: "14,2k lượt bán",
      product_image:
        "https://down-bs-vn.img.susercontent.com/vn-11134207-7r98o-lx6t7p9d59zt47.webp",
      product_link: "https://s.shopee.vn/VuOhomEps",
    },
  ],
  [
    {
      product_title:
        "Quần jean bò ống rộng suông xuông nữ jeans cạp cao chất mịn co giãn phong cách Hàn Quốc sành điệu style năm 2024",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m1djs9jmspqwfa.webp",
      product_sold: "8,9k lượt bán",
      product_link: "https://s.shopee.vn/9pS3qcstPg",
    },
    {
      product_title:
        "QUẦN NỈ NỮ ỐNG RỘNG VẢI NỈ ÉP Mịn Loại 1 Dày Dặn Form Dài Rộng Thể Thao Cá Tính MA99",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m24omefv4yor3e.webp",
      product_sold: "38,7k lượt bán",
      product_link: "https://s.shopee.vn/LayXD9yNO",
    },
    {
      product_title:
        "Quần Short Form Bí Phồng Y2K Quần Đùi Nữ Phong Cách Giáng Sinh Đỏ / Đen Sgenzbrand",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m6c28rodcbhy51.webp",
      product_sold: "7k lượt bán",
      product_link: "https://s.shopee.vn/7Kkis6Rsco",
    },
    {
      product_title: "Quần Sooc Kaki nữ, Quần short nữ vải kaki",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lz7bdiypo2ap19.webp",
      product_sold: "4,9k lượt bán",
      product_link: "https://s.shopee.vn/4VQXUvBSad",
    },
    {
      product_title: "Quần Đùi Nữ Mặc Nhà Short Nữ Tập Gym Yoga P2HNEW QN01",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7qukw-lg7h82yopai21d.webp",
      product_sold: "71,8k lượt bán",
      product_link: "https://s.shopee.vn/2LM2uy9gl0",
    },
    {
      product_title:
        "Quần jean bò ống rộng suông xuông nữ jeans cạp cao chất mịn co giãn phong cách Hàn Quốc sành điệu style năm 2024",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m1djs9jmspqwfa.webp",
      product_sold: "8,9k lượt bán",
      product_link: "https://s.shopee.vn/AA4uFOEWYN",
    },
    {
      product_title:
        "Quần Black Funoff Short Biker Short Dáng Ngắn Nữ Nâng Mông Mùa Hè Năng Động",
      product_image:
        "https://down-zl-vn.img.susercontent.com/e289850762d7ab76122048e41d273fb6.webp",
      product_sold: "162,8k lượt bán",
      product_link: "https://s.shopee.vn/2B2ciiI7JY",
    },
    {
      product_title:
        "Quần Đùi Nữ Cạp Cao Chất Vải Umi Hàn Co Dãn 4 Chiều Quần Short Nữ Dance Lưng Cao Gen Bụng Nâng Mông Tôn Dáng Cho Nữ",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m0wg7plp6cj1f5.webp",
      product_sold: "23,3k lượt bán",
      product_link: "https://s.shopee.vn/4L77IiQmxC",
    },
    {
      product_title:
        "Quần đùi nữ VUVY, quần short nữ thể thao lưng thun thiết kế rút dây thời trang năng động QDN2",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7qukw-lfhm9jvb6q2d20.webp",
      product_sold: "16,5k lượt bán",
      product_link: "https://s.shopee.vn/800PfTPYZD",
    },
    {
      product_title:
        "Quần Short Dance Idol Kpop Nữ VITRAN BOUTIQUE Thun Cotton Co Giãn 4 Chiều 9 Màu, Dây Kéo Sau",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7qukw-ljp9g4xtlltge4.webp",
      product_sold: "72,7k lượt bán",
      product_link: "https://s.shopee.vn/2B2cim7MG7",
    },
    {
      product_title:
        "Quần short jean nữ cạp trễ, quần short jean nữ siêu ngắn, quần short phong cách Y2K_C58",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m66dir4huchkf3.webp",
      product_sold: "7,9k lượt bán",
      product_link: "https://s.shopee.vn/6KsBgSMIoI",
    },
    {
      product_title:
        "QUẦN SHORT GẬP GẤU QUẦN SHORT NỮ CÁ TÍNH ỐNG RỘNG TRẺ TRUNG",
      product_image:
        "https://down-zl-vn.img.susercontent.com/c4ff2dfb8a5671e1a81a45a88560a373.webp",
      product_sold: "65,5k lượt bán",
      product_link: "https://s.shopee.vn/1g6M7uH3VQ",
    },
    {
      product_title:
        "Quần jean bò ống suông rộng nữ xuông jeans cạp cao phong cách style Hàn Quốc",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m2ktgyc6yapmf7.webp",
      product_sold: "15,3k lượt bán",
      product_link: "https://s.shopee.vn/3Av9ugWs3N",
    },
    {
      product_title: "Quần jeans TRẮNG ỐNG LOE form rộng dài chùm phủ chân",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ras8-m3my0mpunkx4d1.webp",
      product_sold: "35,4k lượt bán",
      product_link: "https://s.shopee.vn/4Anh6Z5vFe",
    },
    {
      product_title:
        "COMBO Quần Legging Đùi Ngố Dài ECOCHIC Nữ Cạp Cao Gen Bụng Tập Gym Yoga Chất Liệu Su Đúc Định Hình Nâng Mông",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lyala3f91h9d72.webp",
      product_sold: "21,4k lượt bán",
      product_link: "https://s.shopee.vn/5pvv5eCeCv",
    },
    {
      product_title:
        "Quần Short Jean Nữ Basic Trắng Kem - Form Ôm Sát, Tôn Dáng Hoàn Hảo, Thoải Mái Cả Ngày N18",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9r7wlbmp2ma61.webp",
      product_sold: "4k lượt bán",
      product_link: "https://s.shopee.vn/6poSHVhhej",
    },
    {
      product_title: "Quần Baggy Đũi Thái, quần đũi dài nữ mặc mát đẹp",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134201-7r98o-ly383rcbnu1ldd.webp",
      product_sold: "54,4k lượt bán",
      product_link: "https://s.shopee.vn/5fcUtOTOUf",
    },
    {
      product_title: "Quần Sooc Ido Cạp Cao Khoá Sau Chất Umi Co Dãn Ôm Dáng",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m66ty79rfyk8c7.webp",
      product_sold: "69,5k lượt bán",
      product_link: "https://s.shopee.vn/8KdG4JrgzI",
    },
    {
      product_title:
        "Quần Short Nữ Dệt Kim Siêu Hot - Thiết Kế Lá Cờ AACá Tính, Chất Len Mát Mịn, Mặc Cực Thoải Mái HT11",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-ma0o4mg28m0e6e.webp",
      product_sold: "5k lượt bán",
      product_link: "https://s.shopee.vn/1VmvvmQJA0",
    },
    {
      product_title:
        "Quần short đùi thể thao nữ Reeta 2 lớp co giãn 4 chiều tập Gym - Yoga - chạy bộ - aerobic - A3060",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m7q7nbmlmw033d.webp",
      product_sold: "25,2k lượt bán",
      product_link: "https://s.shopee.vn/8UwgGflrIu",
    },
    {
      product_title:
        "Quần Tây Ống Suông (Chất Gold Nhật) Mềm Mịn Lưng Cao Tôn Dáng Dài 97cm và 102cm",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lxsicgllej8ba2.webp",
      product_sold: "47,8k lượt bán",
      product_link: "https://s.shopee.vn/AKOKS64LC7",
    },
    {
      product_title: "https://s.shopee.vn/AKOKS64LC7",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-llvwezl9wli7c2.webp",
      product_sold: "101,9k lượt bán",
      product_link: "https://s.shopee.vn/4L77JXWJJh",
    },
    {
      product_title:
        "Quần Short Denim Chauzi Lưng Cao Phối Túi Trước Cho Nữ Cao Cấp Phong Cách Thời Trang Hàn Quốc [không kèm đai] QS247",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-ltls60i98vf1cc.webp",
      product_sold: "94k lượt bán",
      product_link: "https://s.shopee.vn/2LM2vtV0LL",
    },
    {
      product_title:
        "Quần Ống Rộng Nữ Vải Đũi Mát Quảng Châu Loại Đẹp Hót Hít, Cạp Cao Lên From Xinh",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-llk04ussriko3c.webp",
      product_sold: "192k lượt bán",
      product_link: "https://s.shopee.vn/40UGuyJibo",
    },
    {
      product_title:
        "Quần Short nữ Lưng Cao Denim Co Giãn Basic 2 màu Đen Trắng cho Nữ Cao Cấp Phong Cách Thời Trang Hàn Quốc",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lxc439itp6mxcb.webp",
      product_sold: "52,3k lượt bán",
      product_link: "https://s.shopee.vn/AA4uGKv9xW",
    },
    {
      product_title:
        "Quần Short Len Cờ Mỹ Nữ Dệt Kim Cao Cấp – Dáng Ôm Tôn Dáng, Phong Cách Đi Biển Hot Trend",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m9ob1nw41u9aa6.webp",
      product_sold: "12k lượt bán",
      product_link: "https://s.shopee.vn/8fG6Tdheh0",
    },
    {
      product_title:
        "Quần Ống Rộng Chất Đũi Cạp Chun Lưng Cao dài 100-104cm phong cách nhật bản Lên Dáng Siêu Xinh",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7r98o-lwjivhd11qs936.webp",
      product_sold: "50,3k lượt bán",
      product_link: "https://s.shopee.vn/4fjxiJ9CHD",
    },
    {
      product_title:
        "Allofme Nữ Quần Lót Cotton Nguyên Chất Mềm Mại Và Thoáng Khí Quần Lót Nữ Màu Trơn M-2XL",
      product_image:
        "https://down-zl-vn.img.susercontent.com/sg-11134201-7rdwo-ly3heclawbjkde.webp",
      product_sold: "3,3k lượt bán",
      product_link: "https://s.shopee.vn/4Anh7OpNxK",
    },
    {
      product_title:
        "Quần jean ỐNG SUÔNG LOE wash cạp cao tôn dáng phom thụng tôn dáng",
      product_image:
        "https://down-zl-vn.img.susercontent.com/vn-11134207-7ra0g-m89w7i96lwuf02.webp",
      product_sold: "2,3k lượt bán",
      product_link: "https://s.shopee.vn/7ARIgxPlAr",
    },
    {
      product_title:
        "áo sơ mi nữ tay ngắn chất thô thêu nơ mặc đi học đi làm phong cách trẻ trung A289 SUTANO",
      product_image:
        "https://down-ws-vn.img.susercontent.com/sg-11134201-7rdx3-m0jwedp7h8s0c3.webp",
      product_sold: "6k lượt bán",
      product_link: "https://s.shopee.vn/4fjxiNyaHD",
    },
  ],
];

export { PRODUCTS };
