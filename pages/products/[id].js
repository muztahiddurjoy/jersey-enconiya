import React from 'react'
import {db} from '../../firebase'
import {get,ref,child} from 'firebase/database'
import { useRouter } from 'next/router'
function getProductData(){
    return get(child(ref(db),'/products')).then((snap)=>{
        if(snap.exists()){
            return snap.val()
        }
        else{
            useRouter().push('/page-not-found')
        }
    })
}
export async function getServerSideProps(context){
    const result = await getProductData()
}
const ProductPage = () => {
  return (
    <div>ProductPage</div>
  )
}

export default ProductPage