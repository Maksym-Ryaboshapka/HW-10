// Task 1

const createMessage = () => "Hello world!";

const showMessage = (callback) => {
	const message = callback();
	
  return alert(message);
};

showMessage(createMessage);


// Task 2

const guessNumber = (userNumber) => {
  let message;

  const min = 1;
  const max = 100;

  const randomNumber = Math.round(Math.random() * (max - min) + min);

  if (userNumber === randomNumber) {
    message = `Ви вгадали! Початкове число: ${randomNumber}, ваше число: ${userNumber}`;
  } else {
    message = `Ви не вгадали! Початкове число: ${randomNumber}, ваше число: ${userNumber}`;
  }

  return message;
};

const userNumber = Number(prompt("Введіть число"));

alert(guessNumber(userNumber));

// Task 3

let quantityOfClicks = 0;
let counterOfClicks;

do {
  counterOfClicks = confirm(
    'Клікайте на кнопку "OK". Щоб закінчити, натисніть "Відміна"'
  );

  if (counterOfClicks === true) {
    quantityOfClicks++;
  }
} while (counterOfClicks !== false);

alert(`Ви клікнули ${quantityOfClicks} разів`);

// Task 4

const applyCallback = (arr, callback) => {
	const result = [];

	for (let i = 0; i < arr.length; i++) {
		result.push(callback(arr[i]));
	}

	return result;
}

const increaseByOne = (number) => number + 1;

const numbers = [1, 2, 3, 4, 5];

alert(applyCallback(numbers, increaseByOne));

// Task 5

const calculateDiscountedPrice = (price, discount, callback) => {
	const discountedPrise = price - price * (discount / 100);

	return callback(discount, discountedPrise);
}

const showDiscountedPrise = (discount, discountedPrise) => {
	const message = `Ціна зі знижкою ${discount}% становить ${discountedPrise}`;
	
	return alert(message);
};

calculateDiscountedPrice(100, 30, showDiscountedPrise);