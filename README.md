# Tool-js

#### 这不是Node.js包！

**这是个javascript的小工具？**

# 用法

## tool.js

```HTML
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/Tool-js/tool.js"></script>
```

会有一定延迟

### getQueryVariable

```JavaScript
getQueryVariable(variable,err)
```
用于获取url参数

| variable | err |
| --- | --- |
| 参数名 | 不存在时返回 |

### lantern

```JavaScript
lantern()
```
春节小灯笼

### Memorial

```JavaScript
Memorial()
```
国家公祭日时，网站变灰

### TombSweepingDay

```JavaScript
TombSweepingDay()
```
清明节时，网站变灰

### RestrictedPass

```JavaScript
RestrictedPass(url)
```
| url |
| --- |
| 允许跳转网址中的关键字 |
意味着只有允许的网址才可跳转
这里是关键字
如https://tool-js.vercel.app ,只需填写tool-js

### UrlChUrlChange

```JavaScript
MirrorProtection(url) 
```
| head | footer | change | out |
| --- | --- | --- | --- |
| 加在url前面 | 加在url后面 | url时候转换为Url编码(true/false) | 不转换关键字，包含关键字，则会保持原有url |

**javascript: 不会转换**

**并未排除当前网站链接**

### MirrorProtection

```JavaScript
MirrorProtection(url) 
```
| url |
| --- |
| 域名(后面不要有/），如：https://github.com |
**可以本地访问，可以使用turn.html**

### RestrictedPass

```JavaScript
RestrictedPass(url)
```
| url |
| --- |
| 特定字符 |

只允许包含特定字符的url跳转到页面
## sha.js

```HTML
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/Tool-js/tool.js"></script>
```

会有一定延迟
### hex_sha1

```JavaScript
hex_sha1(s)
```
| s |
| --- |
| 要加密的文本 |

对文本加密，无法解密！
## email.js

```HTML
<script src="https://cdn.jsdelivr.net/gh/Fgaoxing/Tool-js/email.js"></script>
```

会有一定延迟

### hex_sha1

```JavaScript
Email.send({
	Host: 'smtp.office365.com', //SMTP服务器
	Username: 'yt-stmp@outlook.com', //登录用户
	Password: 'YT20211101', //密码（部分为授权码）
	To: getQueryVariable('email', ''), //收件人
	From: 'yt-stmp@outlook.com', //发件人
	Subject: '  ',  //邮件主题
	Body: txet
}).then(
// 发送后
)
```

js发邮件
