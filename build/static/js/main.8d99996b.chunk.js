(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(39)},37:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(22),c=a.n(l),o=a(42),i=a(6),s=a(14),u=a(3),E=a(4),m=a(7),p=a(5),d=a(8),h=a(45),R=a(41),f=a(44),O=a(40),b=function(e){return{type:"MIDDLEWARE_GET_ARTICLE",payload:e}},_=function(e){return{type:"MIDDLEWARE_DELETE_ARTICLE",payload:e}},y=function(e){var t=e.split("T")[0],a=e.substring(e.lastIndexOf("T")+1,e.lastIndexOf("."));return"".concat(t," ").concat(a)},g=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).props.getArticles(),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.user,a=e.articles;return r.a.createElement("main",{className:"container"},r.a.createElement("h1",null,"My Blog Ultimate"),(!t||t&&!t.token)&&r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{to:"/login",className:"right btn pink darken-2"},"Log in")),t&&t.token&&"USER"!==t.role&&r.a.createElement("div",{className:"row"},"SUPERADMIN"===t.role&&r.a.createElement(O.a,{to:"/admin",className:"btn pink darken-2"},"Dashboard"),r.a.createElement(O.a,{to:"/article/create",className:"right btn orange accent-2"},r.a.createElement("i",{className:"material-icons left"},"add"),"Write an article")),r.a.createElement("ul",null,a&&a.map(function(e){return r.a.createElement("li",{key:e._id,className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"card-title"},e.title),e.author?r.a.createElement("p",null,e.author.username):r.a.createElement("i",null,"deleted"),r.a.createElement("p",null,y(e.dateCreated))),r.a.createElement("div",{className:"card-action"},r.a.createElement(O.a,{to:"article/".concat(e._id)},"SEE ARTICLE")))})))}}]),t}(n.Component),T=Object(f.a)(Object(i.b)(function(e){return{user:e.userReducer.user||JSON.parse(localStorage.getItem("user"))||void 0,articles:e.articleReducer.articles}},function(e){return{getArticles:function(){e({type:"MIDDLEWARE_GET_ARTICLES"})}}})(g)),N=a(12),C=function(e){return{type:"MIDDLEWARE_GET_PROFILE",payload:e}},v=function(e){function t(e){var a;Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(N.a)({},r,n))},a.onSubmit=function(e){e.preventDefault(),a.props.registerUser(a.state)},a.state={username:"",password:""};var n=JSON.parse(localStorage.getItem("user"));return n&&n.token&&a.props.history.push("/"),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){this.props.registerSuccess&&(this.props.clearRegisterData(),this.props.history.push("/login"))}},{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("h1",null,"Register"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"username",required:!0,value:this.state.username,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"username",className:"active"},"Username")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"password",name:"password",required:!0,value:this.state.password,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"password",className:"active"},"Password")),r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{to:"/login"},"Already registered?"),r.a.createElement("button",{onClick:this.onSubmit,className:"right btn-small"},"REGISTER"))),this.props.registerError&&r.a.createElement("p",null,this.props.registerError))}}]),t}(n.Component),I=Object(f.a)(Object(i.b)(function(e){return{registerSuccess:e.userReducer.registerSuccess,registerError:e.userReducer.registerError}},function(e){return{registerUser:function(t){e(function(e){return{type:"MIDDLEWARE_REGISTER",payload:e}}(t))},clearRegisterData:function(){e({type:"CLEAR_REGISTER"})}}})(v)),D=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(N.a)({},r,n))},a.onSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.loginUser({username:n,password:r})},a.state={username:"",password:"",prevPath:""},a.props.user&&a.props.user.token&&a.props.history.push("/"),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.location!==this.props.location&&this.setState({prevPath:this.props.location})}},{key:"componentDidMount",value:function(){this.props.user&&this.props.user.token&&this.props.history.push(this.state.prevPath)}},{key:"componentDidUpdate",value:function(e,t,a){this.props.user&&!this.props.user.error&&(this.props.clearLoginData(),this.props.history.push("/"))}},{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("h1",null,"Login"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"username",required:!0,value:this.state.username,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"username",className:"active"},"Username")),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"password",name:"password",required:!0,value:this.state.password,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"password",className:"active"},"Password")),r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{to:"/register"},"Not registered yet?"),r.a.createElement("button",{onClick:this.onSubmit,className:"right btn-small"},"Login"))),this.props.loginError&&r.a.createElement("p",null,this.props.loginError))}}]),t}(n.Component),L=Object(f.a)(Object(i.b)(function(e){return{user:e.userReducer.user||JSON.parse(localStorage.getItem("user"))||void 0,loginError:e.userReducer.loginError}},function(e){return{loginUser:function(t){e(function(e){return{type:"MIDDLEWARE_LOGIN",payload:e}}(t))},clearLoginData:function(){e({type:"CLEAR_LOGIN"})}}})(D)),j=a(2),A=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(N.a)({},r,n))},a.onSubmit=function(e){e.preventDefault(),a.props.createArticle(Object(j.a)({},a.state,{author:a.props.user._id}))},a.goBack=function(){a.props.history.goBack()},a.state={title:"",content:""},a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("button",{onClick:this.goBack,className:"btn-flat action-btn light-blue-text text-darken-1 no-padding"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Go back"),"USER"===this.props.user.role?r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"403 Forbidden"),r.a.createElement("p",null,"You do not have permission to access this page.")):r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Create an article"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"title",required:!0,autofocus:!0,value:this.state.title,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"title",className:"active"},"Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{name:"content",required:!0,value:this.state.content,onChange:this.handleInputChange,className:"materialize-textarea"}),r.a.createElement("label",{htmlFor:"content",className:"active"},"Content")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.onSubmit,className:"right btn-small"},"CREATE"))),this.props.articleData&&r.a.createElement("p",null,this.props.articleData)))}}]),t}(n.Component),S=Object(f.a)(Object(i.b)(function(e){return{articleData:e.articleReducer.data}},function(e){return{createArticle:function(t){e(function(e){return{type:"MIDDLEWARE_CREATE_ARTICLE",payload:e}}(t))}}})(A)),k=function(e){return{type:"MIDDLEWARE_DELETE_COMMENT",payload:e}},M=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(N.a)({},n,r))},a.onSubmitComment=function(e){e.preventDefault(),a.props.postComment({content:a.state.comment,author:a.props.user._id,article:a.props.article._id})},a.onDeleteComment=function(e,t){e.preventDefault(),a.props.deleteComment({id:t,userId:a.props.user._id})},a.onDeleteArticle=function(e){e.preventDefault();var t=a.props,n=t.article,r=t.user;a.props.deleteArticle({_id:n._id,userId:r._id}),a.props.history.push("/")},a.goBack=function(){a.props.history.goBack()},a.state={comment:""},a.props.getArticle(window.location.href.substr(window.location.href.lastIndexOf("/")+1)),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.article,l=t.user;return r.a.createElement("main",{className:"container"},r.a.createElement("button",{onClick:this.goBack,className:"btn-flat action-btn light-blue-text text-darken-1 no-padding"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Go back"),a?r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,a.title),r.a.createElement("p",{className:"italic"},"Published on ",y(a.dateCreated)," by \xa0",r.a.createElement(O.a,{to:"/profile/".concat(a.author._id)},a.author.username)),a.dateUpdated!==a.dateCreated&&r.a.createElement("p",{className:"italic"},"Updated on ",y(a.dateUpdated)),r.a.createElement("p",{className:"text"},a.content),l&&l.token&&"USER"!==l.role&&r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"right"},r.a.createElement(O.a,{to:"/article/edit/".concat(a._id),className:"btn-flat orange-text text-accent-2"},r.a.createElement("i",{className:"material-icons left"},"edit"),"Edit article"),l&&"SUPERADMIN"===l.role&&r.a.createElement("button",{onClick:this.onDeleteArticle,className:"btn-flat pink-text text-darken-2"},r.a.createElement("i",{className:"material-icons left"},"delete_forever"),"DELETE ARTICLE"))),l&&l.token&&r.a.createElement("div",{className:"category"},r.a.createElement("h5",null,"Post a comment"),r.a.createElement("form",null,r.a.createElement("textarea",{name:"comment",required:!0,value:this.state.comment,onChange:this.handleInputChange,className:"materialize-textarea"}),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.onSubmitComment,className:"right btn-small"},"POST",r.a.createElement("i",{className:"material-icons right"},"send"))))),r.a.createElement("div",{className:"category"},r.a.createElement("h5",null,"Comments"),a.comments?a.comments.map(function(t){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{key:t._id,className:"card-content"},r.a.createElement("p",{className:"card-title"},t.content),r.a.createElement("p",null,t.author," on ",y(t.dateCreated))),l&&(t.author===l._id||a.author===l._id||"SUPERADMIN"===l.role)&&r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{onClick:function(a){return e.onDeleteComment(a,t._id)},className:"btn-flat btn-small pink-text text-darken-2 transparent no-padding"},r.a.createElement("i",{className:"material-icons left"},"delete_forever"),"DELETE")))}):r.a.createElement("p",null,"No comment was posted yet."))):r.a.createElement("p",null,"Either this article doesn't exist or there has been an internal error. Try refreshing the page."))}}]),t}(n.Component),w=Object(f.a)(Object(i.b)(function(e){return{article:e.articleReducer.article,user:e.userReducer.user||JSON.parse(localStorage.getItem("user"))||void 0}},function(e){return{getArticle:function(t){e(b(t))},postComment:function(t){e(function(e){return{type:"MIDDLEWARE_CREATE_COMMENT",payload:e}}(t))},deleteComment:function(t){e(k(t))},deleteArticle:function(t){e(_(t))}}})(M)),G=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(N.a)({},r,n))},a.onSubmit=function(e){e.preventDefault();var t=a.props,n=t.article,r=t.user;a.props.editArticle(Object(j.a)({},a.state,{dateUpdated:new Date,_id:n._id,userId:r._id}))},a.goBack=function(){a.props.history.goBack()},a.state={title:"",content:""},a.props.article||"USER"===a.props.user.role||a.props.getArticle(window.location.href.substr(window.location.href.lastIndexOf("/")+1)),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){if(this.props.article){var e=this.props.article,t=e.title,a=e.content;this.setState({title:t,content:a})}}},{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("button",{onClick:this.goBack,className:"btn-flat action-btn light-blue-text text-darken-1 no-padding"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Go back"),"USER"===this.props.user.role?r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"403 Forbidden"),r.a.createElement("p",null,"You do not have permission to access this page.")):r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,"Edit the article"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"title",required:!0,autofocus:!0,value:this.state.title,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"title",className:"active"},"Title")),r.a.createElement("div",{className:"input-field"},r.a.createElement("textarea",{name:"content",required:!0,value:this.state.content,onChange:this.handleInputChange,className:"materialize-textarea"}),r.a.createElement("label",{htmlFor:"content",className:"active"},"Content")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.onSubmit,className:"right btn"},r.a.createElement("i",{className:"material-icons left"},"check"),"SAVE CHANGES"))),this.props.articleData&&r.a.createElement("p",null,this.props.articleData)))}}]),t}(n.Component),x=Object(f.a)(Object(i.b)(function(e){return{article:e.articleReducer.article,articleData:e.articleReducer.data}},function(e){return{getArticle:function(t){e(b(t))},editArticle:function(t){e(function(e){return{type:"MIDDLEWARE_EDIT_ARTICLE",payload:e}}(t))}}})(G)),U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).logout=function(e){e.preventDefault(),a.props.logoutUser(a.state),a.props.history.push("/login")},a.goBack=function(){a.props.history.goBack()},a.props.getProfile(window.location.href.substr(window.location.href.lastIndexOf("/")+1)),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props,t=e.profile,a=e.user;return r.a.createElement("main",{className:"container"},r.a.createElement("button",{onClick:this.goBack,className:"btn-flat action-btn light-blue-text text-darken-1 no-padding"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Go back"),t?r.a.createElement(n.Fragment,null,r.a.createElement("h1",null,t.username),r.a.createElement("div",{className:"category"},r.a.createElement("h5",null,"Number of written article(s): ",t.articles.length,"."),r.a.createElement("ul",null,t.articles&&t.articles.map(function(e){return r.a.createElement("li",{key:e._id,className:"card"},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",{className:"card-title"},e.title),e.author?r.a.createElement("p",null,e.author.username):r.a.createElement("i",null,"deleted"),r.a.createElement("p",null,y(e.dateCreated))),r.a.createElement("div",{className:"card-action"},r.a.createElement(O.a,{to:"article/".concat(e._id)},"SEE ARTICLE")))}))),r.a.createElement("div",{className:"category"},r.a.createElement("h5",null,"Number of written comment(s): ",t.comments.length,"."),r.a.createElement("ul",null,t.comments&&t.comments.map(function(e){return r.a.createElement("li",{key:e._id,className:"card"},r.a.createElement("div",{key:e._id,className:"card-content"},r.a.createElement("p",{className:"card-title"},e.content),r.a.createElement("p",null,e.author," on ",y(e.dateCreated)),r.a.createElement("p",null,"from article \xa0",r.a.createElement(O.a,{to:"/article/".concat(e.article._id)},e.article.title))))}))),(t._id===a._id||"SUPERADMIN"===a.role)&&r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{to:"/profile/edit/".concat(t._id),className:"right btn orange accent-2"},r.a.createElement("i",{className:"material-icons left"},"edit"),"Edit profile")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.logout,className:"btn-flat pink-text text-darken-2"},"Logout"))):r.a.createElement("p",null,"Either this user doesn't exist or there has been an internal error. Try refreshing the page."))}}]),t}(n.Component),P=Object(f.a)(Object(i.b)(function(e){return{profile:e.userReducer.profile,user:e.userReducer.user||JSON.parse(localStorage.getItem("user"))||void 0}},function(e){return{getProfile:function(t){e(C(t))},logoutUser:function(){e({type:"LOGOUT"})}}})(U)),F=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).handleInputChange=function(e){var t=e.target,n=t.value,r=t.name;a.setState(Object(N.a)({},r,n))},a.onSubmit=function(e){e.preventDefault(),a.props.editProfile(Object(j.a)({},a.state,{_id:a.props.profile._id,userId:a.props.user._id}))},a.goBack=function(){a.props.history.goBack()},a.state={username:"",password:"",role:""},a.props.profile||a.props.getProfile(window.location.href.substr(window.location.href.lastIndexOf("/")+1)),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.profile;e&&this.setState({username:e.username,role:e.role})}},{key:"render",value:function(){var e=this.props,t=e.user,a=e.editError;return r.a.createElement("main",{className:"container"},r.a.createElement("button",{onClick:this.goBack,className:"btn-flat action-btn light-blue-text text-darken-1 no-padding"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Go back"),r.a.createElement("h1",null,"Edit profile"),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"username",required:!0,autofocus:!0,value:this.state.username,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"username",className:"active"},"Username")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.onSubmit,className:"right btn-small orange accent-2"},"CHANGE USERNAME"))),r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"password",name:"password",required:!0,value:this.state.password,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"password",className:"active"},"Password")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.onSubmit,className:"right btn-small orange accent-2"},"CHANGE PASSWORD"))),"SUPERADMIN"===t.role&&r.a.createElement("form",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{type:"text",name:"role",required:!0,value:this.state.role,onChange:this.handleInputChange}),r.a.createElement("label",{htmlFor:"role",className:"active"},"Role")),r.a.createElement("div",{className:"row"},r.a.createElement("button",{onClick:this.onSubmit,className:"right btn-small orange accent-2"},"CHANGE ROLE"))),a&&r.a.createElement("p",null,a))}}]),t}(n.Component),W=Object(f.a)(Object(i.b)(function(e){return{editError:e.userReducer.editError,profile:e.userReducer.profile}},function(e){return{editProfile:function(t){e(function(e){return{type:"MIDDLEWARE_EDIT_PROFILE",payload:e}}(t))},getProfile:function(t){e(C(t))}}})(F)),K=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).onDeleteArticle=function(e,t){e.preventDefault(),a.props.deleteArticle({_id:t,userId:a.props.user._id})},a.onDeleteUser=function(e,t){e.preventDefault(),a.props.deleteUser({_id:t,userId:a.props.user._id})},a.onDeleteComment=function(e,t){e.preventDefault(),a.props.deleteComment({id:t,userId:a.props.user._id})},a.goBack=function(){a.props.history.push("/")},a.props.articles||a.props.getArticles(),a.props.users||a.props.getUsers(),a.props.comments||a.props.getComments(),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.articles,n=t.users,l=t.comments;return r.a.createElement("main",{className:"container"},r.a.createElement("button",{onClick:this.goBack,className:"btn-flat action-btn light-blue-text text-darken-1 no-padding"},r.a.createElement("i",{className:"material-icons left"},"arrow_back"),"Go back to home"),r.a.createElement("h1",null,"Dashboard"),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"#users",className:"btn-flat light-blue-text text-darken-1"},"Users"),r.a.createElement("a",{href:"#articles",className:"btn-flat light-blue-text text-darken-1"},"Articles"),r.a.createElement("a",{href:"#comments",className:"btn-flat light-blue-text text-darken-1"},"Comments")),r.a.createElement("div",{id:"users",className:"category"},r.a.createElement("h5",null,"All users"),n&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Username"),r.a.createElement("th",null,"Role"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,n.map(function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t._id),r.a.createElement("td",null,t.username),r.a.createElement("td",null,t.role),r.a.createElement("td",null,r.a.createElement(O.a,{to:"/profile/".concat(t._id),className:"btn-flat light-blue-text text-darken-1 action-btn"},"See in detail"),r.a.createElement(O.a,{to:"/profile/edit/".concat(t._id),className:"btn-flat orange-text text-accent-2 action-btn"},"Edit"),r.a.createElement("button",{onClick:function(a){return e.onDeleteUser(a,t._id)},className:"btn-flat pink-text text-darken-2 action-btn"},"Delete")))})))),r.a.createElement("div",{id:"articles",className:"category"},r.a.createElement("h5",null,"All articles"),r.a.createElement("div",{className:"row"},r.a.createElement(O.a,{to:"/article/create",className:"right btn orange accent-2"},r.a.createElement("i",{className:"material-icons left"},"add"),"Write an article")),a&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Date created"),r.a.createElement("th",null,"Last update"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,a.map(function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t._id),r.a.createElement("td",null,t.title),r.a.createElement("td",null,null===t.author?r.a.createElement("i",null,"deleted"):r.a.createElement(O.a,{to:"/profile/".concat(t.author._id)},t.author.username)),r.a.createElement("td",null,y(t.dateCreated)),r.a.createElement("td",null,y(t.dateUpdated)),r.a.createElement("td",null,r.a.createElement(O.a,{to:"/article/".concat(t._id),className:"btn-flat light-blue-text text-darken-1 action-btn"},"See in detail"),r.a.createElement(O.a,{to:"/article/edit/".concat(t._id),className:"btn-flat orange-text text-accent-2 action-btn"},"Edit"),r.a.createElement("button",{onClick:function(a){return e.onDeleteArticle(a,t._id)},className:"btn-flat pink-text text-darken-2 action-btn"},"Delete")))})))),r.a.createElement("div",{id:"comments",className:"category"},r.a.createElement("h5",null,"All comments"),l&&r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Id"),r.a.createElement("th",null,"Content"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"From article"),r.a.createElement("th",null,"Actions"))),r.a.createElement("tbody",null,l.map(function(t){return r.a.createElement("tr",{key:t._id},r.a.createElement("td",null,t._id),r.a.createElement("td",null,t.content),r.a.createElement("td",null,null===t.author?r.a.createElement("i",null,"deleted"):r.a.createElement(O.a,{to:"/profile/".concat(t.author._id)},t.author.username)),r.a.createElement("td",null,r.a.createElement(O.a,{to:"/article/".concat(t.article)},t.article)),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(a){return e.onDeleteComment(a,t._id)},className:"btn-flat pink-text text-darken-2 action-btn"},"Delete")))})))))}}]),t}(n.Component),B=Object(f.a)(Object(i.b)(function(e){return{articles:e.articleReducer.articles,users:e.userReducer.users,comments:e.commentReducer.comments}},function(e){return{getArticles:function(){e({type:"MIDDLEWARE_GET_ARTICLES"})},deleteArticle:function(t){e(_(t))},getUsers:function(){e({type:"MIDDLEWARE_GET_USERS"})},deleteUser:function(t){e(function(e){return{type:"MIDDLEWARE_DELETE_USER",payload:e}}(t))},getComments:function(){e({type:"MIDDLEWARE_GET_COMMENTS"})},deleteComment:function(t){e(k(t))}}})(K)),J=function(e){function t(){return Object(u.a)(this,t),Object(m.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("main",{className:"container"},r.a.createElement("h1",null,"404 not found"),r.a.createElement("h5",null,"This page does not exist."))}}]),t}(n.Component),q={background:"none",border:"none",color:"white"},H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(m.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).onSubmit=function(e){e.preventDefault(),a.props.logoutUser(a.state),a.props.history.push("/login")},a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this.props.user;return r.a.createElement("nav",{className:"row col m12 pink darken-2"},r.a.createElement("div",{className:"col m7"},r.a.createElement(O.a,{to:"/",className:"col s3"},"MyBlogUltimate"),e&&e.token&&"SUPERADMIN"===e.role&&r.a.createElement(O.a,{to:"/admin",className:"col m2 hide-on-med-and-down"},"Dashboard")),e&&e.token?r.a.createElement("div",{className:"col m5 valign-wrapper"},r.a.createElement(O.a,{to:"/profile/".concat(e._id),className:"col m2"},e.username),r.a.createElement("button",{onClick:this.onSubmit,className:"col m3 right hide-on-med-and-down",style:q},"Logout")):r.a.createElement(O.a,{to:"/login",className:"col s6 offset-s6"},"Login"))}}]),t}(n.Component),z=Object(f.a)(Object(i.b)(function(e){return e},function(e){return{logoutUser:function(){e({type:"LOGOUT"})}}})(H)),V=a(43);function X(e){var t=function(t){function a(){return Object(u.a)(this,a),Object(m.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(d.a)(a,t),Object(E.a)(a,[{key:"render",value:function(){return this.props.user.token?r.a.createElement(e,this.props):r.a.createElement(V.a,{to:"/login"})}}]),a}(n.Component);return Object(f.a)(Object(i.b)(function(e){return{user:e.userReducer.user||JSON.parse(localStorage.getItem("user"))||void 0}},{})(t))}var Y=function(e){function t(e){var a;Object(u.a)(this,t);var n=(a=Object(m.a)(this,Object(p.a)(t).call(this,e))).props.user;return(!n||n&&!n.token)&&a.props.logoutUser(),a}return Object(d.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",null,r.a.createElement(z,{user:this.props.user})),r.a.createElement(h.a,null,r.a.createElement(R.a,{exact:!0,path:"/",component:T}),r.a.createElement(R.a,{exact:!0,path:"/article/create",component:X(S)}),r.a.createElement(R.a,{path:"/article/edit/:id",component:X(x)}),r.a.createElement(R.a,{path:"/article/:id",component:w}),r.a.createElement(R.a,{exact:!0,path:"/register",component:I}),r.a.createElement(R.a,{exact:!0,path:"/login",component:L}),r.a.createElement(R.a,{path:"/profile/edit/:id",component:X(W)}),r.a.createElement(R.a,{path:"/profile/:id",component:P}),r.a.createElement(R.a,{exact:!0,path:"/admin",component:X(B)}),r.a.createElement(R.a,{path:"",component:J})))}}]),t}(n.Component),$=Object(f.a)(Object(i.b)(function(e){return{user:e.userReducer.user||JSON.parse(localStorage.getItem("user"))||void 0}},function(e){return{logoutUser:function(){e({type:"LOGOUT"})}}})(Y));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Q="http://".concat(window.location.hostname,":",5e3),Z=function(e,t){return fetch("".concat(Q).concat(e),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})},ee=function(e){return fetch("".concat(Q).concat(e),{method:"GET",headers:{"Content-Type":"application/json"}}).then(function(e){return e.json()})},te=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return fetch("".concat(Q).concat(e),{method:"DELETE",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}).then(function(e){return e.json()})},ae={MIDDLEWARE_REGISTER:function(e,t){Z("/register",e).then(function(e){return e.error?t({type:"REGISTER_ERROR",payload:e}):t({type:"REGISTER_OK",payload:{response:e}})},function(e){return t({type:"REGISTER_ERROR",payload:e})}).catch(function(e){return t({type:"LOGIN_ERROR",payload:e})})},MIDDLEWARE_LOGIN:function(e,t){Z("/login",e).then(function(e){return e.error?t({type:"LOGIN_ERROR",payload:e}):t({type:"LOGIN_OK",payload:{response:e}})},function(e){return t({type:"LOGIN_ERROR",payload:e})}).catch(function(e){return t({type:"LOGIN_ERROR",payload:e})})},MIDDLEWARE_GET_PROFILE:function(e,t){ee("/profile/".concat(e)).then(function(e){return e.error?t({type:"GET_PROFILE_ERROR",payload:e}):t({type:"GET_PROFILE_OK",payload:e})},function(e){return t({type:"GET_PROFILE_ERROR",payload:e})}).catch(function(e){return t({type:"GET_PROFILE_ERROR",payload:e})})},MIDDLEWARE_EDIT_PROFILE:function(e,t){Z("/profile/edit/".concat(e._id),e).then(function(e){return e.error?t({type:"EDIT_PROFILE_ERROR",payload:e}):t({type:"EDIT_PROFILE_OK",payload:e})},function(e){return t({type:"EDIT_PROFILE_ERROR",payload:e})}).catch(function(e){return t({type:"EDIT_PROFILE_ERROR",payload:e})})},MIDDLEWARE_GET_USERS:function(e,t){ee("/user/all").then(function(e){return e.error?t({type:"GET_USERS_ERROR",payload:e}):t({type:"GET_USERS_OK",payload:e})},function(e){return t({type:"GET_USERS_ERROR",payload:e})}).catch(function(e){return t({type:"GET_USERS_ERROR",payload:e})})},MIDDLEWARE_DELETE_USER:function(e,t){te("/user/delete/".concat(e._id),e).then(function(e){return e.error?t({type:"DELETE_USER_ERROR",payload:e}):t({type:"DELETE_USER_OK",payload:e})},function(e){return t({type:"DELETE_USER_ERROR",payload:e})}).catch(function(e){return t({type:"DELETE_USER_ERROR",payload:e})})}},ne={user:void 0},re={MIDDLEWARE_CREATE_ARTICLE:function(e,t){Z("/article/create",e).then(function(e){return e.error?t({type:"CREATE_ARTICLE_ERROR",payload:e}):t({type:"CREATE_ARTICLE_OK",payload:e})},function(e){return t({type:"CREATE_ARTICLE_ERROR",payload:e})}).catch(function(e){return t({type:"CREATE_ARTICLE_ERROR",payload:e})})},MIDDLEWARE_GET_ARTICLES:function(e,t){ee("/article/all").then(function(e){return e.error?t({type:"GET_ARTICLES_ERROR",payload:e}):t({type:"GET_ARTICLES_OK",payload:e})},function(e){return t({type:"GET_ARTICLES_ERROR",payload:e})}).catch(function(e){return t({type:"GET_ARTICLES_ERROR",payload:e})})},MIDDLEWARE_GET_ARTICLE:function(e,t){ee("/article/".concat(e)).then(function(e){return e.error?t({type:"GET_ARTICLE_ERROR",payload:e}):t({type:"GET_ARTICLE_OK",payload:e})},function(e){return t({type:"GET_ARTICLE_ERROR",payload:e})}).catch(function(e){return t({type:"GET_ARTICLE_ERROR",payload:e})})},MIDDLEWARE_EDIT_ARTICLE:function(e,t){var a,n;(a="/article/edit/".concat(e._id),n=e,fetch("".concat(Q).concat(a),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then(function(e){return e.json()})).then(function(e){return e.error?t({type:"EDIT_ARTICLE_ERROR",payload:e}):t({type:"EDIT_ARTICLE_OK",payload:{response:e}})},function(e){return t({type:"EDIT_ARTICLE_ERROR",payload:e})}).catch(function(e){return t({type:"EDIT_ARTICLE_ERROR",payload:e})})},MIDDLEWARE_DELETE_ARTICLE:function(e,t){te("/article/delete/".concat(e._id),e).then(function(e){return e.error?t({type:"DELETE_ARTICLE_ERROR",payload:e}):t({type:"DELETE_ARTICLE_OK",payload:e})},function(e){return t({type:"DELETE_ARTICLE_ERROR",payload:e})}).catch(function(e){return t({type:"DELETE_ARTICLE_ERROR",payload:e})})}},le={MIDDLEWARE_CREATE_COMMENT:function(e,t){Z("/comment/create",e).then(function(e){return e.error?t({type:"CREATE_COMMENT_ERROR",payload:e}):t({type:"CREATE_COMMENT_OK",payload:e})},function(e){return t({type:"CREATE_COMMENT_ERROR",payload:e})}).catch(function(e){return t({type:"CREATE_COMMENT_ERROR",payload:e})})},MIDDLEWARE_DELETE_COMMENT:function(e,t){te("/comment/delete/".concat(e.id),e).then(function(e){return e.error?t({type:"DELETE_COMMENT_ERROR",payload:e}):t({type:"DELETE_COMMENT_OK",payload:e})},function(e){return t({type:"DELETE_COMMENT_ERROR",payload:e})}).catch(function(e){return t({type:"DELETE_COMMENT_ERROR",payload:e})})},MIDDLEWARE_GET_COMMENTS:function(e,t){ee("/comment/all").then(function(e){return e.error?t({type:"GET_COMMENTS_ERROR",payload:e}):t({type:"GET_COMMENTS_OK",payload:e})},function(e){return t({type:"GET_COMMENTS_ERROR",payload:e})}).catch(function(e){return t({type:"GET_COMMENTS_ERROR",payload:e})})}},ce=Object(s.c)({userReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REGISTER_OK":return Object(j.a)({},e,{registerSuccess:t.payload.response});case"REGISTER_ERROR":return Object(j.a)({},e,{registerError:t.payload.error});case"CLEAR_REGISTER":return Object(j.a)({},e,{registerSuccess:void 0,registerError:void 0});case"LOGIN_OK":var a=t.payload.response,n=a.token,r=a.username,l=a._id,c=a.role;return localStorage.setItem("user",JSON.stringify({token:n,username:r,_id:l,role:c})),Object(j.a)({},e,{user:t.payload.response});case"LOGIN_ERROR":return Object(j.a)({},e,{loginError:t.payload.error});case"CLEAR_LOGIN":return Object(j.a)({},e,{loginError:void 0});case"LOGOUT":return localStorage.clear(),Object(j.a)({},e,{user:void 0});case"GET_PROFILE_OK":return Object(j.a)({},e,{profile:t.payload.response});case"GET_PROFILE_ERROR":return Object(j.a)({},e,{profile:t.payload.error});case"EDIT_PROFILE_OK":var o=t.payload.response,i=JSON.parse(localStorage.getItem("user"));return o._id===i._id?(localStorage.removeItem("user"),localStorage.setItem("user",JSON.stringify({token:i.token,username:o.username,_id:i._id})),Object(j.a)({},e,{user:Object(j.a)({},e.user,{username:o.username}),profile:Object(j.a)({},e.profile,{username:o.username,role:o.role})})):Object(j.a)({},e,{profile:Object(j.a)({},e.profile,{username:o.username,role:o.role})});case"EDIT_PROFILE_ERROR":return Object(j.a)({},e,{editError:t.payload.error});case"GET_USERS_OK":return Object(j.a)({},e,{users:t.payload.response});case"GET_USERS_ERROR":return Object(j.a)({},e,{data:t.payload.error});case"DELETE_USER_OK":return Object(j.a)({},e,{data:t.payload.response});case"DELETE_USER_ERROR":return Object(j.a)({},e,{error:t.payload.error});default:return e}},articleReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_ARTICLE_OK":return Object(j.a)({},e,{data:t.payload.response});case"CREATE_ARTICLE_ERROR":return Object(j.a)({},e,{data:t.payload.error});case"GET_ARTICLES_OK":return console.log(t.payload.response),Object(j.a)({},e,{articles:t.payload.response});case"GET_ARTICLES_ERROR":return Object(j.a)({},e,{data:t.payload.error});case"GET_ARTICLE_OK":return Object(j.a)({},e,{article:t.payload.response});case"GET_ARTICLE_ERROR":return Object(j.a)({},e,{data:t.payload.error});case"EDIT_ARTICLE_OK":var a=t.payload.response.response;return Object(j.a)({},e,{data:a.message,article:a.article});case"EDIT_ARTICLE_ERROR":return Object(j.a)({},e,{data:t.payload.error});case"DELETE_ARTICLE_OK":return Object(j.a)({},e,{data:t.payload.response});case"DELETE_ARTICLE_ERROR":return Object(j.a)({},e,{data:t.payload.error});default:return e}},commentReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_COMMENT_OK":return Object(j.a)({},e,{data:t.payload.response});case"CREATE_COMMENT_ERROR":return Object(j.a)({},e,{data:t.payload.error});case"DELETE_COMMENT_OK":return Object(j.a)({},e,{data:t.payload.response});case"DELETE_COMMENT_ERROR":return Object(j.a)({},e,{data:t.payload.error});case"GET_COMMENTS_OK":return Object(j.a)({},e,{comments:t.payload.response});case"GET_COMMENTS_ERROR":return Object(j.a)({},e,{data:t.payload.error});default:return e}}}),oe=Object(j.a)({},ae,re,le),ie=Object(s.a)(function(e){return function(e){return function(t){e(t),oe[t.type]&&oe[t.type](t.payload,e)}}}),se=(a(37),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||s.d),ue=Object(s.e)(ce,se(ie));c.a.render(r.a.createElement(i.a,{store:ue},r.a.createElement(o.a,null,r.a.createElement($,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.8d99996b.chunk.js.map