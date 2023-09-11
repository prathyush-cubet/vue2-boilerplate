<template>
    <div class="hello">
      <span><a href="#" @click.prevent="action='add'">Add User</a></span>
      <table v-show="action=='edit' || action=='add'">
        <tr>
          <td>firstName</td><td><input type="text" v-model="user.firstName"/></td>
          <td>lastName</td><td><input type="text" v-model="user.lastName"/></td>
          <td>maidenName</td><td><input type="text" v-model="user.maidenName"/></td>
        </tr>
        <tr>
          <td>age</td><td><input type="text" v-model="user.age"/></td>
          <td>gender</td><td><input type="text" v-model="user.gender"/></td>
          <td>email</td><td><input type="text" v-model="user.email"/></td>
          <td>phone</td><td><input type="text" v-model="user.phone"/></td>
        </tr>
        <tr>
          <td colspan="3">
           <button type="submit" @click.prevent="action=='add' ? addUser(): updateUser()">{{ action=='add'? 'Add User':'Update User' }}</button>
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th>firstName</th>
          <th>lastName</th>
          <th>maidenName</th>
          <th>Image</th>
          <th>age</th>
          <th>gender</th>
          <th>email</th>
          <th>phone</th>
        </tr>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.firstName }}</td>
          <td>{{ user.lastName }}</td>
          <td>{{ user.maidenName }}</td>
          <td>{{ user.image }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.gender }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>
            <a href="#" @click.prevent="editUser(user)">Edit</a>
            <a href="#" @click.prevent="deleteUser(user)">Delete</a>
          </td>
        </tr>
      </table>
    </div>
  </template>

  <script>
  import axios from 'axios';
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data() {
      return {
        user: {},
        users :[],
        action:''
      }
    },
    methods: {
      getUsers(){
        axios.get('https://dummyjson.com/users')
        .then((result) => {
          this.users = result.data.users;
        }).catch((err) => {
          console.log(err);
        });
      },
      addUser() {
        axios.post('https://dummyjson.com/users/add', {
          ...this.user
        })
        .then(() => {
          this.getUsers();
        }).catch((err) => {
          console.log(err);
        });
      },
      editUser(user) {
        this.user = user;
        this.action = 'edit';
      },
      updateUser() {
        axios.put('https://dummyjson.com/users/'+this.user.id, {
          ...this.user
        })
        .then(() => {
          this.getUsers();
        }).catch((err) => {
          console.log(err);
        });
      },
      deleteUser(user) {
        if(confirm('Sure to delete?')) {
        this.users = this.users.filter((prd) => {
          return prd.id !== user.id
        })
      }

      }
    },
    mounted() {
      this.getUsers();
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
