import { Component } from "react";

class Content extends Component {
    render() {
        return (
            
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="card mb-4">
                            <a href="#!"><img class="card-img-top" src="https://dummyimage.com/850x350/dee2e6/6c757d.jpg" alt="..." /></a>
                            <div class="card-body">
                                <div class="small text-muted">January 1, 2021</div>
                                <h2 class="card-title">Featured Post Title</h2>
                                <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis aliquid atque, nulla? Quos cum ex quis soluta, a laboriosam. Dicta expedita corporis animi vero voluptate voluptatibus possimus, veniam magni quis!</p>
                                <a class="btn btn-primary" href="#!">Read more →</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export { Content };



//Flex Direction
// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.item1} />
//         <View style={styles.item2} />
//         <View style={styles.item3} />
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row', // 혹은 'column'
//   },
//   item1: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   item2: {
//     flex: 1,
//     backgroundColor: 'yellow',
//   },
//   item3: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
// });


// Align Items
// import React, {Component} from 'react';
// import {StyleSheet, Text, View} from 'react-native';

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.item1}/>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'row', // > column 으로 변경해야 가로 정렬이 됨 
//     alignItems:'flex-start', // > 좌측
//   },
//   item1: {
//     width:50,
//     height:50,
//     backgroundColor: 'red',
//   },
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'row',
//     alignItems:'center', // > 센터
//   },
//   item1: {
//     width:50,
//     height:50,
//     backgroundColor: 'red',
//   },
// });
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection:'row',
//     alignItems:'flex-end', // > 우측
//   },
//   item1: {
//     width:50,
//     height:50,
//     backgroundColor: 'red',
//   },
// });