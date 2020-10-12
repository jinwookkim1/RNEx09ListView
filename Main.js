import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity, Image} from 'react-native';

export default class MainComponent extends Component{

    // React Native에서 ListView의 역할을 하는 Component는 2가지 종류가 있음.
    // 1. FlatList : 모든 아이템이 같은 모양일 때 많이 사용 - 일반적인 리스트뷰
    // 2. SectionList : 섹션에 따라 구분 지어서 리스트할 때 사용 

    // 먼저 1. FlatList에서 사용할 대량의 데이터 배열 - 데이터변경에 실시간 대응하려면 state 사용
    // 중요한 점!! 리스트에 사용하는 데이터들은 반드시 [ key ]라는 이름의 프로퍼티(멤버변수)를 가진 객체 여야만 함.- 각 아이템의 식별자 역할로 강제함
    // 우선 1.실습으로 간단한 string배열
    constructor(){
        super(); //반드시 명시적으로 부모 생성자를 호출해야 함        

        this.state={

            // 1. 일단 간단히 string 배열 
            datas : [ "aaa", "bbb", "ccc", "ddd"], //이렇게 문자열만 있으면 경고.. key가 없어서
            
            // 2. 실습에서 소개 [key]프로퍼티와 데이터를 가진 객체로 대량의 데이터들을 만들어야 함.[key라는 이름의 멤버가 있어야함]
            // key의 값으로 우선 index번호를 지정해 봄- 당연히 string으로 지정해도 됨.
            datas2 : [
                {key:"0", data:"aaa"},
                {key:"1", data:"bbb"},
                {key:"2", data:"ccc"},
                {key:"3", data:"ddd"},

                // 개수가 많으면 자동 스크롤링 됨.
                {key:"4", data:"aaa"},
                {key:"5", data:"bbb"},
                {key:"6", data:"ccc"},
                {key:"7", data:"ddd"},
                {key:"8", data:"aaa"},
                {key:"9", data:"bbb"},
                {key:"10", data:"ccc"},
                {key:"11", data:"ddd"},
            ],

            // 4. 실습에서 사용할 데이터. 앞 Ex08예제의 데이터 그대로 사용해보기
            datas3 : [
                {name:"sam", message:"Hello world", img:require('./images/moana01.jpg')},
                {name:"robin", message:"Hello RN", img:require('./images/moana02.jpg')},
                {name:"hong", message:"Hello react", img:require('./images/moana03.jpg')},
                {name:"kim", message:"Hello hybrid", img:require('./images/moana04.jpg')},
                {name:"rosa", message:"Hello ios", img:require('./images/moana05.jpg')},
                {name:"moana", message:"Hello movie", img:require('./images/moana01.jpg')},
                {name:"jack", message:"Hello tom", img:require('./images/moana02.jpg')},
                {name:"merry", message:"Hello web", img:require('./images/moana03.jpg')},
            ] 
        }
    }


    render(){

        //5. 실습에서 사용하는 this.state.datas3의 배열요소 마다 key프로퍼티 추가하는 코드
        // this.state.datas3.forEach( (item, index)=>{ 
        //     //배열 각 요소에 key값으로 index를 넣기
        //     item.key=index+'';
        // }); 
        // 원래는 아래처럼 map() 이용.. 하지만 위 forEach() 메소드의 item이 객체이므로 item참조변수가 참조하는 것이 원본 객체여서 원본이 변경되므로 forEach()로도 가능함
        // const arr= this.state.datas3.map( (item, index)=>{
        //     //배열 각 요소에 key값으로 index를 넣기
        //     item.key=index+'';
        //     return item;
        // });

        //6. 실습을 위해 5번 실습 후 위 코드 주석처리.....


        return (
            // 1. 기본적인 FlatList 사용하기 - 일단 그냥 string만 있는 대량의 데이터
            // <View style= { style.container }>
            //     <Text style={ style.titleText }>FlatList TEST</Text>

            //     {/* FlatList : RN의 기본 리스트뷰 컴포넌트 */}
            //     {/* 필수 2개의 속성(props) - data, renderItem */}
            //     {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정   */}
            //     {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어서 리턴하는 콜백함수 지정 */}
            //     {/* <FlatList 
            //         data= { this.state.datas }
            //         renderItem= { ( obj )=>{
            //             // 전달받은 매개변수 obj객체 - 위에서 data프로퍼티의 값으로 지정한 this.state.datas의 각 요소와 index번호를 멤버(property)로 가지고 있는 객체
            //             return <Text>{obj.item} , {obj.index}</Text>
            //             // 이 방식은 obj 객체명을 일일이 작성하는 것이 불편하여 보통 아래처럼 구조분해할당을 선호함
            //         } } >
            //     </FlatList> */}
            //     <FlatList 
            //         data= { this.state.datas }
            //         renderItem= { ( {item} )=>{
            //             // 전달받은 매개변수 item : 위에서 data프로퍼티의 값으로 지정한 this.state.datas의 각 요소객체
            //             //                        - 파라미터변수에 반드시 {}감싸야 함. [ ES6의 문법 - 비구조화 할당 문법 사용, 저 아래에 설명 ]    
            //             return <Text>{item}</Text>
            //         } } >
            //     </FlatList>
            // </View>
            // key가 없어서 경고문구가 하단에 표시되며 리스트 뷰가 랜더링 되지 못함

            // 2. [key]프로퍼티와 데이터를 가진 객체들을 가진 대량의 데이터배열
            // <View style= { style.container }>
            //     <Text style={ style.titleText }>FlatList TEST</Text>

            //     {/* FlatList : 필수 2개의 속성(props) - data, renderItem [ 마치 안드로이드의 아답터와 비슷함 ]*/}
            //     {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정   */}
            //     {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어내는 콜백함수 지정 */}
            //     <FlatList 
            //         data= { this.state.datas2 }
            //         renderItem= { ( {item} )=>{
            //             // 전달받은 매개변수 item : 위에서 data프로퍼티의 값으로 지정한 this.state.datas의 각 요소들[객체]
            //             // 배열의 key속성값과 data속성값 보여주기
            //             // Text 2개를 보여줘야 하기에 View 안에 감싸기
            //             return (<View style={ style.itemView }>
            //                         <Text> index : {item.key}</Text>
            //                         <Text> data : {item.data}</Text>
            //                     </View> );
            //         } } />
            // </View>

            //3. 아이템 클릭 이벤트 반응하기
            // <View style= { style.container }>
            //     <Text style={ style.titleText }>FlatList TEST</Text>

            //     {/* FlatList : 필수 2개의 속성(props) - data, renderItem [ 마치 안드로이드의 아답터와 비슷함 ]*/}
            //     {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정   */}
            //     {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어내는 콜백함수 지정 */}
            //     <FlatList 
            //         data= { this.state.datas2 }
            //         renderItem= { ( {item} )=>{
            //             // 전달받은 매개변수 item : 위에서 data프로퍼티의 값으로 지정한 this.state.datas의 각 요소들[객체]
            //             // 배열의 key속성값과 data속성값 보여주기
            //             // View를  TouchableOpacity로 변경하고 onPress속성에 콜백함수지정
            //             return (<TouchableOpacity style={ style.itemView } onPress={ ()=>{ alert(item.data) } }>
            //                         <Text> index : {item.key}</Text>
            //                         <Text> data : {item.data}</Text>
            //                     </TouchableOpacity> );
            //         } } />
            // </View>

            //3. 아이템 클릭 이벤트 반응하기 - renderItem 화살표 함수 코딩 축약형 : {}생략
            // <View style= { style.container }>
            //     <Text style={ style.titleText }>FlatList TEST</Text>

            //     {/* FlatList : 필수 2개의 속성(props) - data, renderItem [ 마치 안드로이드의 아답터와 비슷함 ]*/}
            //     {/* 1) data - FlatList가 보여줄 대량의 데이터들 지정   */}
            //     {/* 2) renderItem - 아이템 하나의 모양(컴포넌트)를 만들어내는 콜백함수 지정 */}
            //     <FlatList 
            //         data= { this.state.datas2 }
            //         renderItem= { ( {item} )=>
            //             // 전달받은 매개변수 item : 위에서 data프로퍼티의 값으로 지정한 this.state.datas의 각 요소들[객체]
            //             // 배열의 key속성값과 data속성값 보여주기
            //             // Text 2개를 보여줘야 하기에 View 안에 감싸기
            //             // return할 명령이 1개면 {}도 생략가능 - <TouchableOpacity>1개이므로 {} 및 return생략!
            //             <TouchableOpacity style={ style.itemView } onPress={ ()=>{ alert(item.data) } }>
            //                 <Text> index : {item.key}</Text>
            //                 <Text> data : {item.data}</Text>
            //             </TouchableOpacity>
            //         } />
            // </View>

            //4. Ex08예제 다시 만들어보기 [ 데이터에 key가 없어서 경고가 표시됨. ]
            // <View style= { style.container } >
            //     <Text style={ style.titleText }>FlatList TEST</Text>

            //     <FlatList 
            //         data= { this.state.datas3}
            //         renderItem= { ( {item} )=> 
            //             <TouchableOpacity style={ style.item } onPress={ ()=>{ alert(item.key) } }>
            //                 <Image source= { item.img } style= { style.itemImg } ></Image>
            //                 <View style={ {flexDirection:'column'} } >
            //                     <Text style= { style.itemName } > { item.name } </Text>
            //                     <Text style= { style.itemMessage } > { item.message }</Text> 
            //                 </View>                            
            //             </TouchableOpacity>                    
            //         } ></FlatList>
            // </View>
            // 경고를 해결하려면 배열의 요소인 객체의 프로퍼티에 [key]가 있어야 함.
            // 그렇다고 FlatList를 쓴다는 이유만으로 데이터 객체마다 [key]프로퍼티를 만들어 내는 것은 다소 비효율적으로 보임
            // 또한, 서버나 DB에서 불러들인 데이터에는 대부분 key프로퍼티가 없겠죠.

            // 그래서 굳이 원본 데이터를 변경하지 않고 FlatList에 사용할 때 원본배열의 요소객체에 key를 추가해주는 코드 작성
            // - return () 전에 render()메소드의 지역변수로....

            // 5. 배열 요소객체 마다마다 key프로퍼티 추가
            // <View style= { style.container } >
            //     <Text style={ style.titleText }>FlatList TEST</Text>

            //     <FlatList 
            //         data= { this.state.datas3 }
            //         renderItem= { ( {item} )=> 
            //             <TouchableOpacity style={ style.item } onPress={ ()=>{ alert(item.key) } }>
            //                 <Image source= { item.img } style= { style.itemImg } ></Image>
            //                 <View style={ {flexDirection:'column'} } >
            //                     <Text style= { style.itemName } > { item.name } </Text>
            //                     <Text style= { style.itemMessage } > { item.message }</Text> 
            //                 </View>                            
            //             </TouchableOpacity>                    
            //         } ></FlatList>
            // </View>

            // 6. 위 방식으로 해결은 되었지만 key로 index를 써야만 해야 하는 상황이 아니라면 굳이 배열의 map()메소드를 통해서
            // 반복처리를 하면서 처리시간을 증가시킬 필요없음.
            // FlatList에 이를 위해 item의 기존 멤버변수(프로퍼티)중에서 key를 대체하여 사용하도록 하는 설정이 있음.
            // 당연히 대체될 프로퍼티는 중복되면 안됨.[중복데이터가 있으면 경고보여짐]
            <View style= { style.container } >
                <Text style={ style.titleText }>FlatList TEST</Text>

                <FlatList 
                    data= { this.state.datas3 }
                    renderItem= { ( {item} )=> 
                        <TouchableOpacity style={ style.item } onPress={ ()=>{ alert(item.name) } }>
                            <Image source= { item.img } style= { style.itemImg } ></Image>
                            <View style={ {flexDirection:'column'} } >
                                <Text style= { style.itemName } > { item.name } </Text>
                                <Text style= { style.itemMessage } > { item.message }</Text> 
                            </View>                            
                        </TouchableOpacity>                    
                    }                    
                    // keyExtractor={ (item) => { return item.name; } }></FlatList>
                    // 역시 (), {}와 return 키워드 생략 가능
                    keyExtractor={ item => item.name }
                    
                    // 스크롤바가 보여지는게 싫다면..
                    showsVerticalScrollIndicator={false}></FlatList>
            </View>

            //추가적으로 FlatList 에 있는 속성들
            // initialNumToRender={20}
            // onEndReachedThreshold={1}
            // onEndReached={this.onEndReached}
            // refreshing={this.state.refreshing}
            // onRefresh={this.onRefresh}


            // Ex10SectionList 만들어보기.....

            
        );

    }//render method..

}//MainComponent class..

//Style object...
const style= StyleSheet.create({
    container:{
        flex:1,
        padding:16,
    },
    titleText:{
        fontSize:24,
        fontWeight:'bold',
        textAlign:'center',
        paddingTop:8,
        paddingBottom:16,
    },
    itemView:{
        borderWidth:1,
        borderRadius:8,
        margin:8,
        padding:8,
    },

    //4번실습 스타일
    item:{
        flexDirection:'row',
        borderWidth:1,
        borderRadius:4,
        padding:8,
        marginBottom:12,
    },
    itemImg:{
        width:120,
        height:100,
        resizeMode:'cover',
        marginRight: 8,
    },
    itemName:{
        fontSize:24,
        fontWeight:'bold',
    },
    itemMessage:{
        fontSize:16,
        fontStyle:'italic',
    }
    

});




// #################################################################################################################

///비구조화 할당 문법 [ Destructuring assignments :  ES6에서 도입 - 간략한 표기법으로 객체의 데이터를 추출할 수 있는 문법]

// var obj= {a:1, b:2};
// var a= obj.a;
// var b= obj.b;

// //위 코드를 비구조화 할당 문법을 사용하면.
// var {a, b}= {a:1, b:2};


// //React Native에서는 import문에서 많이 사용함.

// //원래 Component클래스의 import는
// import React from 'react';
// let Component = React.Component;

// //위 코드를 비구조화 할당 문법을 사용하면
// import React, {Component} from 'react';

// #################################################################################################################
