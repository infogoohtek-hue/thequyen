# Nguồn ảnh

- `public/images/campaign-original.png`: từ ảnh quảng bá THE Q do người dùng cung cấp; hai ảnh đầu trùng nội dung nên dùng một bản.
- `public/images/brand-reference.png`: ảnh ghép sản phẩm, xưởng, phối cảnh cửa hàng và nhận diện do người dùng cung cấp. UI dùng SVG viewBox để hiển thị vùng cần thiết, giữ nguyên tệp gốc.
- `public/images/campaign.png`: banner minh họa bằng công cụ Imagegen tích hợp (không dùng CLI/API riêng). Tạo từ ảnh tham khảo quảng bá THE Q. Nhãn minh họa hiển thị trên website.
- Font Montserrat: Google Fonts, tải cục bộ và dùng qua `next/font/local`.
- Biểu tượng: Lucide React. Logo chữ và hình núi được dựng bằng SVG để mô phỏng tinh thần nhận diện, cần đối chiếu với file logo vector chính thức.

## Prompt cuối cùng cho banner

Use case: ads-marketing. Asset type: landscape editorial fashion website hero, 1536x1024. Input image: clothing and models reference. Create a refined realistic autumn winter fashion campaign photograph inspired by the supplied THE Q image: one young adult Vietnamese man and one young adult Vietnamese woman wearing the same simple black slim horizontal-quilted zip-up puffer jackets, very small tonal THE Q mountain logo on chest. Man on left, woman on right, waist-up or upper thighs. Relaxed confident natural poses with space between people. Mountain lake with misty blue-grey mountain forest, muted olive foliage in autumn, quiet soft overcast daylight, premium natural film fashion photography, detailed black nylon fabric. Landscape with subjects slightly to right, tasteful subdued natural colors. Remove all overlaid writing, diagrams, feature callouts, circles, social media chrome and white borders. No added slogans or graphic text. This is an illustrative campaign concept, not a new product specification.
