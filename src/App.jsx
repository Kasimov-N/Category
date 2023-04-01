import { useState } from 'react'
import './App.css'
import Card from './Card'

function App() {
  let [data, setdata] = useState([])
  const getAll = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setdata(json))
  }
  const getG10 = () => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then(res => res.json())
      .then(json => setdata(json))
  }
  const get1 = () => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get2 = () => {
    fetch('https://fakestoreapi.com/products/2')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get3 = () => {
    fetch('https://fakestoreapi.com/products/3')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get4 = () => {
    fetch('https://fakestoreapi.com/products/4')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get5 = () => {
    fetch('https://fakestoreapi.com/products/5')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get6 = () => {
    fetch('https://fakestoreapi.com/products/6')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get7 = () => {
    fetch('https://fakestoreapi.com/products/7')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get8 = () => {
    fetch('https://fakestoreapi.com/products/8')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get9 = () => {
    fetch('https://fakestoreapi.com/products/9')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get10 = () => {
    fetch('https://fakestoreapi.com/products/10')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get11 = () => {
    fetch('https://fakestoreapi.com/products/11')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get12 = () => {
    fetch('https://fakestoreapi.com/products/12')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get13 = () => {
    fetch('https://fakestoreapi.com/products/13')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get14 = () => {
    fetch('https://fakestoreapi.com/products/14')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get15 = () => {
    fetch('https://fakestoreapi.com/products/15')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get16 = () => {
    fetch('https://fakestoreapi.com/products/16')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get17 = () => {
    fetch('https://fakestoreapi.com/products/17')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get18 = () => {
    fetch('https://fakestoreapi.com/products/18')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get19 = () => {
    fetch('https://fakestoreapi.com/products/19')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const get20 = () => {
    fetch('https://fakestoreapi.com/products/20')
      .then(res => res.json())
      .then(json => setdata([json]))
  }
  const getJw = () => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then(res => res.json())
      .then(json => setdata(json))
  }
  const getEc = () => {
    fetch('https://fakestoreapi.com/products/category/electronics')
      .then(res => res.json())
      .then(json => setdata(json))
  }
  return (
    <>
      <div className="container">
        <div className="btn">
          <button onClick={getAll}>All</button>
          <button onClick={getG10}>get 10</button>
          <button onClick={get1}>get 1</button>
          <button onClick={get2}>get 2</button>
          <button onClick={get3}>get 3</button>
          <button onClick={get4}>get 4</button>
          <button onClick={get5}>get 5</button>
          <button onClick={get6}>get 6</button>
          <button onClick={get7}>get 7</button>
          <button onClick={get8}>get 8</button>
          <button onClick={get9}>get 9</button>
          <button onClick={get10}>get 10</button>
          <button onClick={get11}>get 11</button>
          <button onClick={get12}>get 12</button>
          <button onClick={get13}>get 13</button>
          <button onClick={get14}>get 14</button>
          <button onClick={get15}>get 15</button>
          <button onClick={get16}>get 16</button>
          <button onClick={get17}>get 17</button>
          <button onClick={get18}>get 18</button>
          <button onClick={get19}>get 19</button>
          <button onClick={get20}>get 20</button>
          <button onClick={getJw}>get jewelery</button>
          <button onClick={getEc}>get electronics</button>
        </div>
        </div>
        <div className='container'>
        <div className="cards">
          {data.map(( item, key) => {
            return (
              <Card data={item} />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
