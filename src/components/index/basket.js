functiom initBasket() {
    const basket = {
        items: [],
        totel: null,
        url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',
        container: null, // basket-items
        wrapper: null, //basket all
        sum: 0,
        totalContainer: null,
        init() {
            this.container = document.querySelector('#basket-items');
            this.wrapper = document.querySelector('#basket-inner');
            this.totalContainer = document.querySelector('#basket-sum');

            //async
        }
    }
}