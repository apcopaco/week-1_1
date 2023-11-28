// skillWill week 1 

// homework 1

// ● დაწერე ფუნქცია, რომელიც მიიღებს a და b
// პარამეტრებს და დააბრუნებს ტექსტს
// “ტოლია” თუ a უდრის b-ს, ხოლო
// წინააღმდეგ შემთხვევაში, დააბრუნებს “არ
// არის ტოლი”
// ● გაითვალისწინე, რომ a და b ყოველთვის
// ერთი და იგივე ტიპის არ არის

function compareValues(a,b){
    if(a == b) {
        return "equal";
    } else {
        return "not equal";
    }
}


// homework 2

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს ტემპერატურას ფარენჰეიტებში და
// დააბრუნებს ტემპერატურას ცელსიუსში
// ● თუ პარამეტრი არ არის რიცხვითი მონაცემი
// დააბრუნე - false

function temperatureConvert(Fahrenheit){
// Formula	
// (°F − 32) × 5/9 = °C
    
    if (isNaN(Fahrenheit)){
        return false;
    }else {
        let celsius = (Fahrenheit - 32) * 5/9;
        return celsius;
    }
}

// homework 3

// ● დაწერე ფუნქცია, რომელიც პარამეტრად
// მიიღებს a (პირველი რიცხვი), b (მეორე
// რიცხვი) და operation (+, -, *, /) და
// დააბრუნებს ახალ მნიშვნელობას,
// რომელიც მიიღება ამ ორ რიცხვზე
// operation ცვლადში განსაზღვრული
// ოპერაციით
// ● თუ a და b არ არიან რიცხვები, ან თუ
// operation ცვლადში არის უცნობი,
// ოპერაცია დააბრუნე - false


function calculate(a,b, operation){
    if ((operation !== "+" && operation !== "-" && operation !== "*" && operation !== "/") || isNaN(a) || isNaN(b)){
        return "false";
    } else {
        switch (operation) {
            case '+':
                return a + b;
            case '-':
                return a - b;
            case '*':
                return a * b;
            case '/':
                return a / b;
        }
    }
}
