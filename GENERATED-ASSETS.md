# Bộ ảnh sản phẩm THE Q

Sáu ảnh sản phẩm được tạo bằng Imagegen tích hợp theo yêu cầu bổ sung asset của người dùng. Ảnh tham khảo: `public/images/brand-reference.png`, tài liệu khách hàng cung cấp. Đây là ảnh dựng minh họa, không phải ảnh chụp sản phẩm mới.

Ảnh gốc được lưu ở `assets/generated-products/`. Bản WebP phục vụ website được lưu ở `public/images/products/`.

| Tên | PNG gốc | WebP website |
|---|---|---|
| Áo phao Classic đen | `assets/generated-products/classic.png` | `public/images/products/classic.webp` |
| Gile Essential xanh rêu | `assets/generated-products/essential.png` | `public/images/products/essential.webp` |
| Áo phao Ivory kem | `assets/generated-products/ivory.png` | `public/images/products/ivory.webp` |
| Áo phao Daily có mũ | `assets/generated-products/daily.png` | `public/images/products/daily.webp` |
| Gile Quilted đen | `assets/generated-products/quilted.png` | `public/images/products/quilted.webp` |
| Áo phao Light kem | `assets/generated-products/light.png` | `public/images/products/light.webp` |

## Prompt chung

Use case: product-mockup. Asset type: single high resolution fashion ecommerce catalog photograph, portrait 1024x1360. Input image is a product reference contact sheet from the customer. Recreate only the specified garment faithfully from that reference, preserving its silhouette, quilting, zipper, collar, pocket placement and color. Show entire garment from collar to hem with both sides visible, centered, front view, invisible ghost mannequin, empty sleeves naturally shaped, no person or visible mannequin or hanger. Clean very light warm grey seamless studio background #f4f3f0, soft diffused commercial studio lighting, gentle grounded shadow, crisp realistic nylon texture, premium apparel catalog. Garment occupies 78% of image height, consistent generous margins. No text, badges, labels, watermarks or extra objects. This is an illustrative reconstruction for the website, not evidence of exact manufacturing specifications.

## Phần bổ sung riêng cho từng ảnh

1. Classic — Subject: the black men's horizontal quilted puffer jacket shown in contact sheet row 3 column 2. Short stand collar, central black zipper, regular fit, long sleeves, hip-length hem, black tonal finish.
2. Essential — Subject: the dark olive sleeveless quilted vest shown in contact sheet row 3 column 3. Sleeveless, short stand collar, central black zipper, horizontal channel quilting, streamlined regular fit, hip length.
3. Ivory — Subject: the ivory white women's quilted long sleeve jacket shown in contact sheet row 3 column 4 and bottom right. Cream ivory light nylon, horizontal fine quilting, short stand collar, central zipper, gently fitted waist, hip-length hem.
4. Daily — Subject: the muted olive-grey hooded horizontal quilted puffer jacket shown in contact sheet bottom row first column. Attached padded hood, central zipper, long sleeves, light narrow horizontal quilting, hip length. Hood is upright but empty.
5. Quilted — Subject: the black sleeveless padded gilet shown in contact sheet row 4 last column. Large horizontal padded baffles, short stand collar, central black zipper, clean side pockets, hip length.
6. Light — Subject: the light ivory cream quilted stand-collar women's jacket shown in contact sheet bottom row last column. Long sleeves, closely spaced horizontal quilting, central cream zipper, feminine gently fitted silhouette, upright short collar, hip length.
