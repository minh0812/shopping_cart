(this.webpackJsonpshopping_cart=this.webpackJsonpshopping_cart||[]).push([[0],{19:function(i,c,t){},26:function(i,c,t){"use strict";t.r(c);var e=t(0),j=t.n(e),s=t(8),a=t.n(s),Z=(t(19),t(7)),I=t(27),m=t(5),n=t(9),M=Object(n.b)({name:"cart",initialState:{cartItems:[]},reducers:{addItemsToCart:function(i,c){for(var t=c.payload.product.id,e=0;e<i.cartItems.length;e++)if(t===i.cartItems[e].product_id)return i.cartItems[e].quantity+=c.payload.quantity,i.cartItems[e].totalPrice+=c.payload.quantity*c.payload.product.price,void alert("\u0110\xe3 th\xeam v\xe0o gi\u1ecf h\xe0ng");var j=(new Date).getTime();i.cartItems.push({id:j,product_id:c.payload.product.id,img:c.payload.product.img,name:c.payload.product.name,quantity:c.payload.quantity,totalPrice:c.payload.quantity*c.payload.product.price}),alert("\u0110\xe3 th\xeam v\xe0o gi\u1ecf h\xe0ng")},removeItem:function(i,c){i.cartItems=i.cartItems.filter((function(i){return i.product_id!==c.payload.cartItem.product_id}))}}}),w=function(i){return i.cart.cartItems},N=M.actions.addItemsToCart,r=M.actions.removeItem,l=M.reducer,o=t(1),d=new Intl.NumberFormat("vi-VI",{style:"currency",currency:"VND"}),h=function(){var i=Object(m.c)(w),c=0;i.map((function(i){return c+=i.totalPrice}));for(var t=0,e=0;e<i.length;e++)t+=i[e].quantity;return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)(Z.b,{to:"/about",className:"header-about",children:"About"}),Object(o.jsx)(Z.b,{to:"/",className:"header-title",children:"Shopping Cart"}),Object(o.jsxs)(Z.b,{to:"/cart",className:"cart",children:[Object(o.jsx)(I.a,{className:"cart-icons",color:"rgb(233, 80, 34)",size:35}),Object(o.jsx)("span",{className:"number-item",children:t}),Object(o.jsxs)("p",{className:"tongtien-header",children:["T\u1ed5ng: ",d.format(c)]})]})]})},V=t(6),D=function(i){return Object(o.jsxs)("div",{className:"product-number",children:[Object(o.jsx)("p",{children:"S\u1ed1 l\u01b0\u1ee3ng:"}),Object(o.jsx)("p",{className:"sum",onClick:function(){i.setQuantity(i.quantity+1)},children:"+"}),Object(o.jsx)("p",{children:i.quantity}),Object(o.jsx)("p",{className:"sub",onClick:function(){i.quantity>0&&i.setQuantity(i.quantity-1)},children:"\u2013"})]})},u=new Intl.NumberFormat("vi-VI",{style:"currency",currency:"VND"}),b=function(i){var c=i.product,t=Object(e.useState)(0),j=Object(V.a)(t,2),s=j[0],a=j[1],Z=Object(m.b)();return Object(o.jsxs)("div",{className:"product",children:[Object(o.jsx)("h4",{className:"product-title",children:c.name}),Object(o.jsx)("img",{src:c.img,alt:c.img}),Object(o.jsx)(D,{quantity:s,setQuantity:a}),Object(o.jsx)("button",{onClick:function(){s>0&&Z(N({product:c,quantity:s})),a(0)},children:"Add to cart"}),Object(o.jsxs)("p",{className:"product-price",children:["Gi\xe1: ",u.format(c.price)]})]})},p=[{id:"1",price:28e6,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRP6A7AJ4CDXEBG2LHGOHVKNBTRJ%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B9EC007FE-7708-4D20-A59C-CE3D54D0CE29%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 13 pro"},{id:"2",price:225e5,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRNMSV7XMJ2J5VHIKSAYKQVGRCIZ%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B767F95AC-4927-4EED-8548-18542A688919%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 13"},{id:"3",price:1869e4,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXROTV55YG6V345GZ7GQ5YXELA6UQ%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B837BAFD3-BB7A-4DE7-9F9A-1DC5C8B07A90%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 13 mini"},{id:"4",price:26e6,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRISAUBNPM342FGLFFIGMWHYWQUP%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7BD7020512-7CB3-4CD1-B295-06658F8B428F%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 12 pro"},{id:"5",price:1959e4,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRK6MPSD7VU6LRCLKXR63AETRNXH%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B3FE4635E-9ED6-445C-B55E-3ED80938B6E7%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 12"},{id:"6",price:15e6,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRI2TROF6Y7ODRC2NV5M52BVEF3E%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B5F5C9C1A-EE63-451C-A6D7-ACEE83521764%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 12 mini"},{id:"7",price:22e6,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRJN6NTYD5XGMBBYGZD2FHBS2FGK%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B8167F32D-E6F6-4360-8364-7A29C32D14CA%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 11 pro"},{id:"8",price:1429e4,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRN6FFJV34G3RZFJW6HIAEI5EOBP%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B5D5329BE-DBF0-4A8E-9B78-E80111D2382F%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone 11"},{id:"9",price:1e7,img:"https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fstudenthcmupedu-my.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!VcFw3EMkAkeoTU58McGNtMC4xs4UrOpIjb2Cuw04c4gU1rQ5fzhpSKBDsyDCyNQx%2Fitems%2F01ZWGQXRO34LOTPVXLSBG3WY56LZMHXXZK%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc3R1ZGVudGhjbXVwZWR1LW15LnNoYXJlcG9pbnQuY29tQGIxYTlmZGMwLTFkNTYtNGMzZC1hNDgxLTgwOWZmZjhhMjZkYiIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2Mzc4MzA4MDAiLCJleHAiOiIxNjM3ODUyNDAwIiwiZW5kcG9pbnR1cmwiOiJXMW1xVWMzSmtZUGIxRGcwRFdqSU9jVkJ4ZU1qVGZXUXpYSnFLUkw0VkVZPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTI1IiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiWkdNM01HTXhOVFV0TWpRME15MDBOekF5TFdFNE5HUXROR1UzWXpNeFl6RTRaR0kwIiwibmFtZWlkIjoiMCMuZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsIm5paSI6Im1pY3Jvc29mdC5zaGFyZXBvaW50IiwiaXN1c2VyIjoidHJ1ZSIsImNhY2hla2V5IjoiMGguZnxtZW1iZXJzaGlwfHVybiUzYXNwbyUzYWFub24jNmYzZjU5NjQ1NjE0MjRmZTgwMWE0YmZiZGExYjVmZGNkZDVjNTc2ODliMDRiYWIxNjU3NTYwNDBlZTM1OGJiMyIsInNoYXJpbmdpZCI6ImNhZDhyS1lJVkVhVk8rZFZ6QXJuc1EiLCJ0dCI6IjAiLCJ1c2VQZXJzaXN0ZW50Q29va2llIjoiMiIsImlwYWRkciI6IjE3MS4yNTEuMjM0LjExOCJ9.QkZEbUNKU2oyaStPV0dLUGdjTjVnWEU2VUVEamVsZnVlU1JRY0lQeVFkZz0&cTag=%22c%3A%7B37DDE2DB-EBD6-4D90-BB63-BE5E587BDF2A%7D%2C2%22&encodeFailures=1&width=1860&height=860&srcWidth=&srcHeight=",name:"Iphone XR"}],F=function(){return Object(o.jsx)("div",{className:"product-list",children:p.map((function(i){return Object(o.jsx)(b,{product:i},i.id)}))})},A=t(2),T=t(28),W=new Intl.NumberFormat("vi-VI",{style:"currency",currency:"VND"}),Y=function(i){var c=i.cartItem,t=Object(m.b)(),j=Object(e.useState)(c.quantity),s=Object(V.a)(j,2),a=s[0];s[1];return Object(o.jsxs)("div",{className:"cart-item",children:[Object(o.jsx)("img",{src:c.img,alt:c.name}),Object(o.jsx)("p",{children:c.name}),Object(o.jsx)("p",{children:c.quantity}),Object(o.jsx)("p",{children:W.format(c.totalPrice)}),Object(o.jsx)(T.a,{className:"trash-icon",color:"red",size:"27",onClick:function(){t(r({cartItem:c,quantity:a}))}})]})},U=new Intl.NumberFormat("vi-VI",{style:"currency",currency:"VND"}),G=function(){var i=Object(m.c)(w),c=0;return i.map((function(i){return c+=i.totalPrice})),Object(o.jsxs)("div",{className:"list-cart",children:[Object(o.jsxs)("div",{className:"cart-item-bar",children:[Object(o.jsx)("p",{className:"cart-item-name",children:"T\xean s\u1ea3n ph\u1ea9m"}),Object(o.jsx)("p",{className:"cart-item-quantity",children:"S\u1ed1 l\u01b0\u1ee3ng"}),Object(o.jsx)("p",{className:"cart-item-price",children:"T\u1ed5ng ti\u1ec1n"})]}),i.map((function(i){return Object(o.jsx)(Y,{cartItem:i},i.id)})),Object(o.jsxs)("p",{className:"cart-item-totalPrice",children:["T\u1ed5ng: ",U.format(c)]}),Object(o.jsx)("button",{className:"btn-checkout",children:"Thanh To\xe1n"})]})},J=function(){return Object(o.jsxs)("div",{className:"about",children:[Object(o.jsx)("h2",{children:"Design by Coffee Lake Team"}),Object(o.jsxs)("div",{className:"members",children:[Object(o.jsxs)("div",{className:"member",children:[Object(o.jsx)("img",{src:"https://avatars.githubusercontent.com/u/80698434?v=4",alt:"Pham Duy Minh"}),Object(o.jsxs)("p",{children:["Ph\u1ea1m Duy Minh ",Object(o.jsx)("br",{})," 4501104145"]})]}),Object(o.jsxs)("div",{className:"member",children:[Object(o.jsx)("img",{src:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/203597901_790168401700614_1560319651008292218_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=-oB5swtWickAX854yi-&_nc_ht=scontent.fsgn5-10.fna&oh=00a0c06ebe35f9941762c1470f2891ac&oe=61C3C750",alt:"Nguyen Ngoc Phuong Quynh"}),Object(o.jsxs)("p",{children:["Nguy\u1ec5n Ng\u1ecdc Ph\u01b0\u01a1ng Qu\u1ef3nh ",Object(o.jsx)("br",{})," 4501104195"]})]}),Object(o.jsxs)("div",{className:"member",children:[Object(o.jsx)("img",{src:"https://avatars.githubusercontent.com/u/21022372?v=4",alt:"Tran Thi Tu Linh"}),Object(o.jsxs)("p",{children:["Tr\u1ea7n Th\u1ecb T\u1ee9 Linh ",Object(o.jsx)("br",{})," 4501104127"]})]}),Object(o.jsxs)("div",{className:"member",children:[Object(o.jsx)("img",{src:"https://scontent.fsgn5-10.fna.fbcdn.net/v/t1.6435-9/106173335_155429899378946_3166045275740133710_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=aJRwY6CviVUAX8yFxs9&tn=zeJFYff-9wh1FOmN&_nc_ht=scontent.fsgn5-10.fna&oh=b886a454eb7b72a63f87dc6a108f59e5&oe=61C4C9F1",alt:"Huynh Thanh Ngan"}),Object(o.jsxs)("p",{children:["Hu\u1ef3nh Thanh Ng\xe2n ",Object(o.jsx)("br",{})," 4501104151"]})]}),Object(o.jsxs)("div",{className:"member",children:[Object(o.jsx)("img",{src:"https://scontent.xx.fbcdn.net/v/t1.15752-9/240867176_1205004553308706_3281061671164434730_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=aee45a&_nc_ohc=E4X2X1q7W-UAX8jovyO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=7c52e07b34badefccc7f2a8e0c8808fc&oe=61C5AD40",alt:"Pham Phuc Thinh"}),Object(o.jsxs)("p",{children:["Ph\u1ea1m Ph\xfac Th\u1ecbnh ",Object(o.jsx)("br",{})," 4501104226"]})]})]})]})};var y=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(Z.a,{children:[Object(o.jsx)(h,{}),Object(o.jsxs)(A.c,{children:[Object(o.jsx)(A.a,{path:"/",element:Object(o.jsx)(F,{})}),Object(o.jsx)(A.a,{path:"/cart",element:Object(o.jsx)(G,{})}),Object(o.jsx)(A.a,{path:"/about",element:Object(o.jsx)(J,{})})]})]})})},O=Object(n.a)({reducer:{cart:l}});a.a.render(Object(o.jsx)(j.a.StrictMode,{children:Object(o.jsx)(m.a,{store:O,children:Object(o.jsx)(y,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1e384e72.chunk.js.map