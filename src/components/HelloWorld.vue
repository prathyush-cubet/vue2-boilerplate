<template>
  <div class="hello">
    <span><a href="#" @click.prevent="action='add'">Add Product</a></span>
    <table v-show="action=='edit' || action=='add'">
      <tr>
        <td>Title</td><td><input type="text" v-model="product.title"/></td>
        <td>Category</td><td><input type="text" v-model="product.category"/></td>
        <td>Description</td><td><input type="text" v-model="product.description"/></td>
      </tr>
      <tr>
        <td>Price</td><td><input type="text" v-model="product.price"/></td>
        <td>Rating</td><td><input type="text" v-model="product.rating"/></td>
        <td>Stock</td><td><input type="text" v-model="product.stock"/></td>
        <td>Brand</td><td><input type="text" v-model="product.brand"/></td>
      </tr>
      <tr><button type="submit" @click.prevent="action=='add' ? addProduct(): updateProduct()">{{ action=='add'? 'Add Product':'Update Product' }}</button></tr>
    </table>
    <table>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>Description</th>
        <th>Image</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Stock</th>
        <th>Brand</th>
      </tr>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.title }}</td>
        <td>{{ product.category }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.image }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.rating }}</td>
        <td>{{ product.stock }}</td>
        <td>{{ product.brand }}</td>
        <td>
          <a href="#" @click.prevent="editProduct(product)">Edit</a>
          <a href="#" @click.prevent="deleteProduct(product)">Delete</a>
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
      product: {},
      products :[],
      action:''
    }
  },
  methods: {
    getProducts(){
      axios.get('https://dummyjson.com/products')
      .then((result) => {
        this.products = result.data.products;
      }).catch((err) => {
        console.log(err);
      });
    },
    addProduct() {
      axios.post('https://dummyjson.com/products/add', {
        ...this.product
      })
      .then(() => {
        this.getProducts();
      }).catch((err) => {
        console.log(err);
      });
    },
    editProduct(product) {
      this.product = product;
      this.action = 'edit';
    },
    updateProduct() {
      axios.put('https://dummyjson.com/products/'+this.product.id, {
        ...this.product
      })
      .then(() => {
        this.getProducts();
      }).catch((err) => {
        console.log(err);
      });
    },
    deleteProduct(product) {
      axios.delete('https://dummyjson.com/products/'+product.id)
      .then(() => {
        this.getProducts();
      }).catch((err) => {
        console.log(err);
      });
    }
  },
  mounted() {
    this.getProducts();
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
