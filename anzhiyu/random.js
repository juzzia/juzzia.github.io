var posts=["2024/01/23/hello-world/","2024/01/23/java/framework/feign/自定义Feign/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };