var reverseBetween = function (head, left, right) {
    let reversedList = [];

    let counter = 1;
    let current = JSON.parse(JSON.stringify(head));

    while (current) {

        if (counter >= left && counter <= right) {
            reversedList.push(current.val);
        }
        current = current.next;
        counter++;
    }

    counter = 1;
    current = JSON.parse(JSON.stringify(head));
    const result = current;

    while (current) {

        if (counter >= left && counter <= right) {
            current.val = reversedList.pop();
        }

        current = current.next;
        counter++;
    }

    return result;

};