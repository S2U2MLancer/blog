##NIO介绍
标准的IO基于字节流和字符流进行操作的，而NIO是基于通道（Channel）和缓冲区（Buffer）进行操作，
 数据总是从通道读取到缓冲区中，或者从缓冲区写入到通道中。
 NIO可以工作在非阻塞模式下
##NIO 核心组件
###Buffer
###Channel
###select
###数据流：
![](https://i.imgur.com/QD0ddPk.png)
###主要的 channel：
    FileChannel       从文件中读写数据
	DatagramChannel  能通过UDP读写网络中的数据
	SocketChannel     能通过TCP读写网络中的数据 （类似于Socket）
	ServerSocketChannel  可以监听新进来的TCP连接
###Buffer类型
    ByteBuffer
    CharBuffer
    DoubleBuffer
    FloatBuffer
    IntBuffer
    LongBuffer
    ShortBuffer
    Buffer 三大属性： capacity（buffer容量） limit(下一个读取的位置) position（下一个写入的位置）
###Buffer的读写模式：
![](https://i.imgur.com/d4IO39s.png)
    使用Buffer读写数据一般遵循以下四个步骤：
    ·写入数据到Buffer
    ·调用flip()方法
    ·从Buffer中读取数据
    ·调用clear()方法或者compact()方法
###Selector：
![](https://i.imgur.com/9iMZM4O.png)
    Selector 可以监听的事件
    事件    		常量
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
    
    select() 是阻塞的直到至少有一个通通有就绪事件发生
Edit By [MaHua](http://mahua.jser.me)
Edit By [MaHua](http://mahua.jser.me)