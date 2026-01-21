function magic() {

    a = new Date().getMonth();
    b = new Date().getDate();
    c = new Date().getMinutes();

    d = eval(document.magic_form.like_number.value);


    if (d >= 0) {
        a += 1
        x = (a + b + 1) * c;
        x = x % 10;

        y = d % 10

        document.write(a + "月" + b + "日<br>今日のあなたの運勢は<br>");

        document.write("<h2>");
        switch (x) {
            case 0:

                switch (y) {
                    case 0:
                        document.write("大大吉");
                        break;
                    case 1:
                        document.write("大吉");
                        break;
                    case 2:
                        document.write("中吉");
                        break;
                    case 3:
                        document.write("小吉");
                        break;
                    case 4:
                        document.write("超普通吉");
                        break;
                    case 5:
                        document.write("ウサ吉");
                        break;
                    case 6:
                        document.write("末吉");
                        break;
                    case 7:
                        document.write("吉");
                        break;
                    case 8:
                        document.write("凶");
                        break;
                    case 9:
                        document.write("大凶");
                        break;
                }
                break;

            case 1:

                switch (y) {
                    case 0:
                        document.write("大吉");
                        break;
                    case 1:
                        document.write("中吉");
                        break;
                    case 2:
                        document.write("小吉");
                        break;
                    case 3:
                        document.write("超普通吉");
                        break;
                    case 4:
                        document.write("ウサ吉");
                        break;
                    case 5:
                        document.write("末吉");
                        break;
                    case 6:
                        document.write("吉");
                        break;
                    case 7:
                        document.write("凶");
                        break;
                    case 8:
                        document.write("大凶");
                        break;
                    case 9:
                        document.write("大大吉");
                        break;
                }
                break;

            case 2:

                switch (y) {
                    case 0:
                        document.write("中吉");
                        break;
                    case 1:
                        document.write("小吉");
                        break;
                    case 2:
                        document.write("超普通吉");
                        break;
                    case 3:
                        document.write("ウサ吉");
                        break;
                    case 4:
                        document.write("末吉");
                        break;
                    case 5:
                        document.write("吉");
                        break;
                    case 6:
                        document.write("凶");
                        break;
                    case 7:
                        document.write("大凶");
                        break;
                    case 8:
                        document.write("大大吉");
                        break;
                    case 9:
                        document.write("大吉");
                        break;
                }
                break;

            case 3:

                switch (y) {
                    case 0:
                        document.write("小吉");
                        break;
                    case 1:
                        document.write("超普通吉");
                        break;
                    case 2:
                        document.write("ウサ吉");
                        break;
                    case 3:
                        document.write("末吉");
                        break;
                    case 4:
                        document.write("吉");
                        break;
                    case 5:
                        document.write("凶");
                        break;
                    case 6:
                        document.write("大凶");
                        break;
                    case 7:
                        document.write("大大吉");
                        break;
                    case 8:
                        document.write("大吉");
                        break;
                    case 9:
                        document.write("中吉");
                        break;
                }
                break;

            case 4:

                switch (y) {
                    case 0:
                        document.write("超普通吉");
                        break;
                    case 1:
                        document.write("ウサ吉");
                        break;
                    case 2:
                        document.write("末吉");
                        break;
                    case 3:
                        document.write("吉");
                        break;
                    case 4:
                        document.write("凶");
                        break;
                    case 5:
                        document.write("大凶");
                        break;
                    case 6:
                        document.write("大大吉");
                        break;
                    case 7:
                        document.write("大吉");
                        break;
                    case 8:
                        document.write("中吉");
                        break;
                    case 9:
                        document.write("小吉");
                        break;
                }
                break;

            case 5:

                switch (y) {
                    case 0:
                        document.write("ウサ吉");
                        break;
                    case 1:
                        document.write("末吉");
                        break;
                    case 2:
                        document.write("吉");
                        break;
                    case 3:
                        document.write("凶");
                        break;
                    case 4:
                        document.write("大凶");
                        break;
                    case 5:
                        document.write("大大吉");
                        break;
                    case 6:
                        document.write("大吉");
                        break;
                    case 7:
                        document.write("中吉");
                        break;
                    case 8:
                        document.write("小吉");
                        break;
                    case 9:
                        document.write("超普通吉");
                        break;
                }
                break;

            case 6:

                switch (y) {
                    case 0:
                        document.write("末吉");
                        break;
                    case 1:
                        document.write("吉");
                        break;
                    case 2:
                        document.write("凶");
                        break;
                    case 3:
                        document.write("大凶");
                        break;
                    case 4:
                        document.write("大大吉");
                        break;
                    case 5:
                        document.write("大吉");
                        break;
                    case 6:
                        document.write("中吉");
                        break;
                    case 7:
                        document.write("小吉");
                        break;
                    case 8:
                        document.write("超普通吉");
                        break;
                    case 9:
                        document.write("ウサ吉");
                        break;
                }
                break;

            case 7:

                switch (y) {
                    case 0:
                        document.write("吉");
                        break;
                    case 1:
                        document.write("凶");
                        break;
                    case 2:
                        document.write("大凶");
                        break;
                    case 3:
                        document.write("大大吉");
                        break;
                    case 4:
                        document.write("大吉");
                        break;
                    case 5:
                        document.write("中吉");
                        break;
                    case 6:
                        document.write("小吉");
                        break;
                    case 7:
                        document.write("超普通吉");
                        break;
                    case 8:
                        document.write("ウサ吉");
                        break;
                    case 9:
                        document.write("末吉");
                        break;
                }
                break;

            case 8:

                switch (y) {
                    case 0:
                        document.write("凶");
                        break;
                    case 1:
                        document.write("大凶");
                        break;
                    case 2:
                        document.write("大大吉");
                        break;
                    case 3:
                        document.write("大吉");
                        break;
                    case 4:
                        document.write("中吉");
                        break;
                    case 5:
                        document.write("小吉");
                        break;
                    case 6:
                        document.write("超普通吉");
                        break;
                    case 7:
                        document.write("ウサ吉");
                        break;
                    case 8:
                        document.write("末吉");
                        break;
                    case 9:
                        document.write("吉");
                        break;
                }
                break;

            case 9:

                switch (y) {
                    case 0:
                        document.write("大凶");
                        break;
                    case 1:
                        document.write("大大吉");
                        break;
                    case 2:
                        document.write("大吉");
                        break;
                    case 3:
                        document.write("中吉");
                        break;
                    case 4:
                        document.write("小吉");
                        break;
                    case 5:
                        document.write("超普通吉");
                        break;
                    case 6:
                        document.write("ウサ吉");
                        break;
                    case 7:
                        document.write("末吉");
                        break;
                    case 8:
                        document.write("吉");
                        break;
                    case 9:
                        document.write("凶");
                        break;
                }
                break;
        }
        document.write("</h2>");
    } else {
        alert("整数を入力してください");
    }
}