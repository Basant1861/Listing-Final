import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../scss/style.scss'

class UserList extends Component {

    renderList() {
        return this.props.users.map((user) => {
            return (


              <tr>
                <td><img src={user.thumbnail} alt="user" style={{height:40 ,width:40}} /></td>

                <td> <p style={{fontFamily:'arial',fontSize:'70%',color:'grey'}}><strong style={{color: 'black'}}> {user.first} {user.last}</strong>
                  <span>
                    <p> {user.date}</p>
                  </span>  
                    <img src="https://cdn2.iconfinder.com/data/icons/freecns-cumulus/16/519948-008_Mail-128.png" alt="mailicon" style={{height:15,width:15}}/>
                    <img src="https://cdn1.iconfinder.com/data/icons/hawcons/32/698367-icon-19-bookmark-add-128.png" alt="bookmark" style={{height:15,width:15}}/> </p> </td>


              </tr>


            );
        });
    }

    render() {
        return (
          <div className="tg-wrap">
                <table style={{width:'25%'}}>
                   <tbody>
                    <tr style={{backgroundColor:'rgb(36, 159, 255)'}}>
                        <th><img src="https://cdn4.iconfinder.com/data/icons/tupix-1/30/list-256.png" alt="menu" style={{height:10,width:10}}/></th>
                        <th style={{fontFamily:'arial'}}>Message</th>
                        <th style={{fontSize:'75%',fontFamily:'arial'}}>ACTIONS</th>
                    </tr>
                    {this.renderList()}
                    </tbody>
               </table>
        </div>
        );
    }

}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
    return {
        users: state.users
    };
}

export default connect(mapStateToProps)(UserList);
