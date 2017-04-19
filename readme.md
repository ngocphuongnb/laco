## **I. Install**
**Clone app package**
```
git clone https://nguyenngocphuongnb@bitbucket.org/nguyenngocphuongnb/laco.git your-app-name
cd your-app-name
npm install
```
**Configure your app**
```
./laco config
```
**Install Laco app**
```
./laco install
```
## **II. Api docs**
#### **1. Laco router**
###### **1.1 Register router**

```
router.register({
    name: 'home',
    label: 'Home page',
    priority: 2,
    path: '/',
    get: (req, res, next) => {
        res.end('Login page')
    }
});
```
###### **1.2 Register middlewares for a specific router**
```
router.middleware({
    route: 'login',
    get: (req, res, next) => {
        res.end('login end');
    }
});
```
###### **1.3 Attach a handler for a specific router method**
```
router.attach('home', 'post', (req, res) => {
    res.end('This is a handler for "POST" attach to "Home" router that does not existed before')
})
```
###### **1.4 Detach a handler from a specific router method**
```
router.detach('home', 'post') //"POST" handler is now no longer available from "Home" router
```