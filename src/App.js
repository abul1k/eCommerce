import Header from "./components/Header";
import Footer from "./components/Footer";
import React from "react";
import Items from "./components/Items";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Секционный диван",
          img: "item1.jpg",
          desc: "Трансформируемый секционный диван-кровать, L-образный диван в скандинавском стиле с современной льняной тканью",
          category: "sofa",
          price: "109.99",
        },
        {
          id: 2,
          title: "Набор простыней",
          img: "item2.jpg",
          desc: "Набор из 6 простыней серии 1800 из микрофибры Комфортные гостиничные простыни с глубоким карманом",
          category: "bedroom",
          price: "38.50",
        },
        {
          id: 3,
          title: "Водонепроницаемый чехол для подушки",
          img: "item3.jpg",
          desc: "Жаккардовый водонепроницаемый чехол для подушки сиденья дивана, чехлы из плотной ткани, чехлы для диванов",
          category: "case",
          price: "7.00",
        },
        {
          id: 4,
          title: "Кухонный стол",
          img: "item4.jpg",
          desc: "Кухонный стол из эпоксидного дерева, уличная мебель из эпоксидной смолы из акации, декор стола из смолы",
          category: "kitchen",
          price: "1.400.00",
        },
        {
          id: 5,
          title: "2010s Eames Modernica",
          img: "item5.jpg",
          desc: "2010s Eames Modernica Пример из четырех стульев Pumpernickel из стекловолокна",
          category: "chairs",
          price: "12.00",
        },
        {
          id: 6,
          title: "DIY Диван",
          img: "item6.jpg",
          desc: "Современный модульный секционный диван Современная мебель для гостиной Набор DIY Диван",
          category: "sofas",
          price: "200.00",
        },
      ],
      showFullItem: false,
      fullitem: {},
    };

    this.deleteOrder = this.deleteOrder.bind(this);
    this.addToOrder = this.addToOrder.bind(this);
    this.onShowItem = this.onShowItem.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header
          onShowItem={this.onShowItem}
          orders={this.state.orders}
          onDelete={this.deleteOrder}
        />
        <Items
          onShowItem={this.onShowItem}
          items={this.state.items}
          onAdd={this.addToOrder}
        />

        {/* {this.state.fullitem} */}
        {this.state.showFullItem && (
          <ShowFullItem
            item={this.state.fullitem}
            onAdd={this.addToOrder}
            onShowItem={this.onShowItem}
          />
        )}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullitem: item });
    this.setState({ showFullItem: !this.state.showFullItem });
    console.log(this.state.fullitem);
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter((el) => el.id !== id) });
  }

  addToOrder(item) {
    let isInArray = false;
    this.state.orders.forEach((el) => {
      if (el.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) this.setState({ orders: [...this.state.orders, item] });
  }
}

export default App;
