-   string(+), boolean(|| && !), number conversion(+ - \* / % > < <= >= | & ^ ~ ==)
-   Khi thực hiện việc chuyển đổi (type coercion) nếu có toán tử dấu cộng(+) với vế có chuỗi(string) thì nó sẽ convert sang **string**
-   Nếu có toán tử dấu(+ - \* / % > < <= >= | & ^ ~ ==) thì nó sẽ convert sang **number**
-   Nếu có toán tử logical(|| && !) thì nó sẽ convert sang **boolean**
-   null chỉ bằng null hoặc undefined khi sử dụng 2 dấu bằng(==)
-   `NaN` thực hiện toán tử với số thì trả ra kết quả là `NaN`
-   Nếu so sánh chuỗi với chuỗi thì không convert sang gì cả
    NaN không bằng bất cứ giá trị nào kể cả chính nó