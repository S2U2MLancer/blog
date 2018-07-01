<html lang="en"><head>
    <meta charset="UTF-8">
    <title></title>
<style id="system" type="text/css">h1,h2,h3,h4,h5,h6,p,blockquote {    margin: 0;    padding: 0;}body {    font-family: "Helvetica Neue", Helvetica, "Hiragino Sans GB", Arial, sans-serif;    font-size: 13px;    line-height: 18px;    color: #737373;    margin: 10px 13px 10px 13px;}a {    color: #0069d6;}a:hover {    color: #0050a3;    text-decoration: none;}a img {    border: none;}p {    margin-bottom: 9px;}h1,h2,h3,h4,h5,h6 {    color: #404040;    line-height: 36px;}h1 {    margin-bottom: 18px;    font-size: 30px;}h2 {    font-size: 24px;}h3 {    font-size: 18px;}h4 {    font-size: 16px;}h5 {    font-size: 14px;}h6 {    font-size: 13px;}hr {    margin: 0 0 19px;    border: 0;    border-bottom: 1px solid #ccc;}blockquote {    padding: 13px 13px 21px 15px;    margin-bottom: 18px;    font-family:georgia,serif;    font-style: italic;}blockquote:before {    content:"C";    font-size:40px;    margin-left:-10px;    font-family:georgia,serif;    color:#eee;}blockquote p {    font-size: 14px;    font-weight: 300;    line-height: 18px;    margin-bottom: 0;    font-style: italic;}code, pre {    font-family: Monaco, Andale Mono, Courier New, monospace;}code {    background-color: #fee9cc;    color: rgba(0, 0, 0, 0.75);    padding: 1px 3px;    font-size: 12px;    -webkit-border-radius: 3px;    -moz-border-radius: 3px;    border-radius: 3px;}pre {    display: block;    padding: 14px;    margin: 0 0 18px;    line-height: 16px;    font-size: 11px;    border: 1px solid #d9d9d9;    white-space: pre-wrap;    word-wrap: break-word;}pre code {    background-color: #fff;    color:#737373;    font-size: 11px;    padding: 0;}@media screen and (min-width: 768px) {    body {        width: 748px;        margin:10px auto;    }}</style><style id="custom" type="text/css"></style></head>
<body marginheight="0"><h2>NIO介绍</h2>
<p>标准的IO基于字节流和字符流进行操作的，而NIO是基于通道（Channel）和缓冲区（Buffer）进行操作，
 数据总是从通道读取到缓冲区中，或者从缓冲区写入到通道中。
 NIO可以工作在非阻塞模式下
</p>
<h2>NIO 核心组件</h2>
<h3>Buffer</h3>
<h3>Channel</h3>
<h3>select</h3>
<h3>数据流：</h3>
<p><img src="" alt="data_stream">
</p>
<h3>主要的 channel：</h3>
<pre><code>FileChannel       从文件中读写数据
DatagramChannel  能通过UDP读写网络中的数据
SocketChannel     能通过TCP读写网络中的数据 （类似于Socket）
ServerSocketChannel  可以监听新进来的TCP连接</code></pre>
<h3>Buffer类型</h3>
<pre><code>ByteBuffer
CharBuffer
DoubleBuffer
FloatBuffer
IntBuffer
LongBuffer
ShortBuffer
Buffer 三大属性： capacity（buffer容量） limit(下一个读取的位置) position（下一个写入的位置）</code></pre>
<h3>Buffer的读写模式：</h3>
<p><img src="" alt="">
    使用Buffer读写数据一般遵循以下四个步骤：
    ·写入数据到Buffer
    ·调用flip()方法
    ·从Buffer中读取数据
    ·调用clear()方法或者compact()方法
</p>
<h3>Selector：</h3>
<pre><code>![]()
Selector 可以监听的事件
事件            常量
·Connect       SelectionKey.OP_CONNECT
·Accept        SelectionKey.OP_ACCEPT
·Read         SelectionKey.OP_READ
·Write          SelectionKey.OP_WRITE
向selector注册通道
Channel.Register(selector,SelectonKey.OP_READ);
选择通道
·int select()
·int select(long timeout)
·int selectNow()

select() 是阻塞的直到至少有一个通通有就绪事件发生</code></pre>
<p>Edit By <a href="http://mahua.jser.me">MaHua</a></p>
</body></html>