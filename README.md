# THE Q — Winter, your way

Website giới thiệu thương hiệu áo khoác THE Q, xây dựng với Next.js App Router, React, TypeScript và CSS responsive. Giao diện bám sát mẫu IVY moda: header trắng 80px, Montserrat, banner bo góc chéo 80px, tiêu đề căn giữa, danh mục 5 sản phẩm trên desktop, tab gạch chân, nút giỏ đen bo góc chéo và nút Xem tất cả viền đôi. Nhận diện, ảnh và nội dung của THE Q; chữ phụ và nhãn lặp được tinh giản.

## Chạy dự án

Yêu cầu Node.js 20.9 trở lên.

```sh
npm install
npm run dev
```

Mở http://127.0.0.1:3000. `npm run build` tạo bản website tĩnh trong `out/`. Có thể triển khai thư mục này lên hosting tĩnh. Nếu muốn dùng `next start`, cần bỏ `output: 'export'` trong `next.config.ts` và build lại.

## Tính năng

- Trang chủ và trang `/ve-chung-toi/` chuyển bằng `next/link` và App Router, không tải lại toàn bộ trang. Header, footer, giỏ yêu cầu và trạng thái giao diện được giữ trong layout chung.
- Menu chính gồm Trang chủ, Bộ sưu tập, Về chúng tôi. Danh mục nam/nữ/gile nằm trong bộ lọc và footer.
- Bộ lọc, tìm kiếm và yêu thích đồng bộ với URL, hỗ trợ nút quay lại/tiến của trình duyệt.
- Trang giới thiệu gồm câu chuyện thương hiệu, ảnh công ty, xưởng, phòng mẫu, bộ nhận diện và tư liệu năng lượng mặt trời. Tham khảo cấu trúc trang `https://ivymoda.com/about/gioi-thieu`.
- Ba banner với trang phục khác nhau, dùng Swiper React với Navigation, Pagination, Keyboard và A11y. Vuốt trên điện thoại, chuyển bằng phím mũi tên, nút trước/sau hoặc chấm chọn slide. Giữ cùng tỉ lệ hiển thị khi chuyển ảnh; không có chữ, nút Khám phá ngay hoặc lớp phủ trên banner.
- Hai ảnh áo trong khối “Ấm áp trong từng khoảnh khắc” có nền trong suốt; xem `TRANSPARENT-ASSETS.md`.
- Ảnh mặt tiền cửa hàng hiển thị đầy đủ từ tệp gốc độ phân giải cao.
- Danh mục nam/nữ/gile; tìm kiếm tên, màu; carousel 5 sản phẩm và nút xem toàn bộ.
- Chi tiết sản phẩm, lựa chọn size, yêu thích.
- Giỏ yêu cầu tư vấn: thêm/xóa, điều chỉnh số lượng, lưu trên trình duyệt và tải danh sách dạng `.txt`.
- Dialog hỗ trợ bàn phím, Escape, đóng khi nhấn nền; giao diện điện thoại và máy tính.
- Font Montserrat đóng gói cục bộ, metadata tiếng Việt, Open Graph.

## Nội dung cần khách hàng xác nhận

Tên các sản phẩm và phân loại nam/nữ là nội dung mẫu để duyệt thiết kế. Chưa có bảng giá, SKU, tồn kho, số đo size, chính sách vận chuyển/đổi trả, hotline, địa chỉ, email hay liên kết mạng xã hội chính thức. Website chưa gửi dữ liệu khách hàng, nhận đơn hàng hoặc thanh toán. Giỏ yêu cầu chỉ lưu cục bộ trên thiết bị.

Sáu ảnh sản phẩm mới được dựng bằng Imagegen từ ảnh ghép khách hàng cung cấp, theo yêu cầu bổ sung asset. Bản WebP tối ưu ở `public/images/products/`, PNG gốc ở `assets/generated-products/`. Prompt và nguồn được ghi trong `GENERATED-ASSETS.md`. Ảnh xưởng và phối cảnh cửa hàng vẫn lấy từ tài liệu gốc. Ảnh phối cảnh cửa hàng không được xem là bằng chứng về địa chỉ cửa hàng thực tế.

## Tệp chính

- `src/app/page.tsx`: route trang chủ.
- `src/app/shop-shell.tsx`: layout phía client dùng chung, dữ liệu sản phẩm, giỏ yêu cầu và tương tác.
- `src/app/url-filters.tsx`: đồng bộ bộ lọc với App Router và lịch sử trình duyệt.
- `src/app/storefront.tsx`: bố cục bám sát mẫu IVY moda, carousel, header, footer và bộ ảnh sản phẩm.
- `src/app/hero-carousel.tsx`: carousel banner Swiper, 3 ảnh và nhãn điều hướng tiếng Việt.
- `src/app/storefront.css`: hệ thống thiết kế và responsive.
- `src/app/ve-chung-toi/page.tsx`: route giới thiệu và metadata.
- `src/app/about-content.tsx`, `src/app/about.css`: nội dung, ảnh và bố cục trang giới thiệu.
- `src/app/dialogs.css`: style các hộp thoại.
- `src/app/layout.tsx`: metadata, Montserrat local.
- `public/images/brand-reference.png`: ảnh ghép gốc khách hàng.
- `public/images/campaign-original.png`: ảnh quảng bá gốc khách hàng.
- `public/images/campaign.png`: banner minh họa tạo bằng Imagegen; không phải ảnh sản phẩm gốc.
- `ASSETS.md`: nguồn hình ảnh và prompt tạo banner.
- `GENERATED-ASSETS.md`: nguồn và prompt của 6 ảnh sản phẩm bổ sung.
- `BANNER-ASSETS.md`: nguồn và prompt banner olive/kem mới.
- `BANNER-THREE.md`: nguồn và prompt banner gile thứ ba.
- `CUSTOMER-ASSETS.md`: nguồn và vị trí dùng 6 ảnh khách hàng mới cung cấp.

## Kiểm tra

Build production kèm kiểm tra TypeScript. Kiểm tra trình duyệt: header và ô tìm kiếm đang nhập được giữ khi chuyển giữa trang chủ/giới thiệu; slide banner không mất khi quay lại; tìm Gile trả về 2 sản phẩm; nút quay lại khôi phục 6 sản phẩm; menu điện thoại đóng sau khi chọn; không tràn ngang ở 390 × 844. Các luồng giỏ yêu cầu vẫn lưu trên thiết bị. Không dùng dịch vụ nhận thanh toán hoặc đơn hàng.
