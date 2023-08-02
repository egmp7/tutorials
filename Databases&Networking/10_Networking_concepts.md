# Packet Switching

Packet switching is a networking design in which the sender divides the message to be sent into small separate units of data called packets and then sends all packets within the network. There is no dedicated path to the receiver. The decision about the next part of the path is taken by intermediate devices called routers. Routers make routing decision for each packet. They only forward packets to the next router without having knowledge of the whole network.

Packet switching provides higher capacity or bandwidth utilization. So it is more efficient and it is less vulnerable to faults in the network than the traditional circuit switching technology used for telephoning. For example, if a particular router doesn't work for some reason, the network will continue to work in almost the same way as before.

The real-world problem that packet switching solved was to connect computers to each other in such a way that they are not vulnerable to attacks. Then this problem expanded. People wanted to make sure that the connection between computers would be fast, high capacity, reliable, and so on. 

- Sender divides messages up into packets
- Sends all packets in the network
- Routes make routing decision per-packet
- There is no dedicated path to receiver

## History of the Internet

- It all began in 1957. The original purpose was to create a communication network that would not be vulnerable to attacks from hostile foreign governments. It started with a network connecting a small number of universities together. So suddenly the idea of having centralized data centers in each place was gone. And scientists started to think about storing data and information in a more distributed fashion.

- Most architecture dates back to 1970s. 
- A protocol for packet network interconnection was developed in 1974
- Last major fixes: 1980s

## Circuit Switching

At the time packet switching was developed, communication where generally happening in a circuit switching fashion (*Telephone switchboards in old movies, with human operators sitting in a room full of wires, and they answer calls and they connect and disconnect wires from one switch to the other*). This form of communication requires a dedicated direct or point-to-point line of communication between the two parties during the call. This is, of course, very **vulnerable to fault attack**. If anything goes wrong in any point of the direct line of communication, the connection is lost. Moreover, the whole line of the communication is dedicated to the current call and **no more connections can be handled on the same line**. So in terms of capacity, it is not very scalable.

## Packet vs Circuit switching

- Higher capacity, bandwidth utilization
- More efficient
- Less vulnerable to faults in the network

# TCP/IP

TCP/IP or transmission control protocol and internet protocol, is an internet protocol stack that provides communication between two computers through the Internet

## What is a protocol

- A **set of rules** for when and how computers send and receive messages
- A **language** computers 'talk' to each other when trying to communicate

## Protocols

There are public domain protocols such as those defined and request for comments or RFCs. RFCs are publicly available documents. A protocol is tested by a technology community and then they invite others to comment on it. This allows for interoperability

### Public-domain

- HTTP
- SMTP

### Proprietary

- Skype

## OSI or Open Systems Interconnection Reference model

- **Application** layer
- **Presentation** layer
- **Session** layer
- **Transport** layer
- **Network** layer
- **Data link** layer
- **Physical** layer

## TCP/IP model

TCP/IP, on the other hand, is a standard Internet protocol stack which is standardized by the Internet Engineering Task Force, IETF. The Internet is developed around this protocol. So OSI is a theoretical model, and TCP/IP can be considered as an implementation of the OSI reference model. The OSI model has seven layers, and TCP/IP has five layers. TCP/IP is a collection of protocols.

- **Application** (Part of Presentation, Session from OSI) layer supports network applications
- **Transport** layer provides process to process data transfer
- **Internet/Network** layer is where the routing of datagrams from source to destination happens
- **Link** layer provides data transfer between neighboring network elements
- **Physical** layer is bits on the wire

## TCP/IP and IP stack (Examples)

A collection of protocols is called an Internet protocol stack.

| Internet protocol stack        | TCP/IP model      |
| ------------------------------ | ----------------- |
| HTTP, FTP,SMTP,SSH,DNS, Telnet | Application layer |
| TCP, UDP                       | Transport layer   |
| IP                             | Network layer     |
| Ethernet, wireless, ADSL       | Link layer        |

Each layer in the source adds some data as the headers to the original message. The transport layer adds a header, let's call it header t. Then the network layer adds the IP addressing headers, which we'll call header n. Then the link layer adds some data which we'll call header l. When the data arrives at the destination, each layer starting from the link layer, removes the header related to that layer before passing the message to the layer above, until the original data arrives at the application layer of the destination computer

| Data                     | TCP/IP model      |
| ------------------------ | ----------------- |
| Message or data (M)      | Application layer |
| Segment (Ht) (M)         | Transport layer   |
| Datagram (Hn) (Ht) (M)   | Network layer     |
| Frame (Hl) (Hn) (Ht) (M) | Link layer        |
|                          | Physical layer    |

# Application Layer

- The highest layer in the model
- Closest to the user
- Provides interfaces and protocols that users need

The application layer protocol defines the types of messages that are exchanged, in other words, whether there are requests or responses. It also sets the message syntax. In other words, what fields are included in the messages and how those fields are delineated and the message semantics which is the meaning of the information in those fields

[RFC 2616](https://www.ietf.org/rfc/rfc2616.txt) Foundation od data communication on the web

## Application Protocols

- HTTP Hyper Text Transfer Protocol
- FTP File Transfer Protocol
- SMTP Simple Mail Transfer Protocol
- SSH Secure Shell
- DNS Domain Name System
- DHCP Dynamic Host Control Protocol
- Telnet Protocol

## HTTP, request and response Example

- Client request:
- GET /index.html HTTP/1.1
- Host: www.example.com
- Server response:

```
HTTP/1.1 200 OK
Date: Mon, 23 May 2005 22:38:34 GMT
Server: Apache/1.3.3.7 (Unix) (Red-Hat/Linux)Last-Modified: Wed, 08 Jan
2003 23:11:55 GMTETag: "3f97f-1hd-2hdha4d6" Content-Type: text/html'
charset=UTF-8Content-Length: 138Accept-Ranges: bytesConnection: close
<html><head><title>An Example Page</title></head><body>Hello World!</body></html>
```

## HTTPS

There are a number of issues to consider when providing online security including data in motion encryption, client and server authentication, and data integrity mechanisms. SSL deals with all of this. Built-in motion encryption encrypts the data to be transferred to keep it confidential and to make sure it will not be readable by anyone other than the recipient. Client and server authentication makes sure that the client and server really are who they claim to be.

- HTTPS: HTTP over SSL (Secure socket layer)
- HTTPS (and FTPS) use SSL to encrypt data sent over a network
- Modern browsers may warn users if a site does not have a valid SSL certificate

## SSL Secure socket Layer and TSL Transport Layer Security

- Both allow data to be transferred privately and securely between a web server and a web browser
- TLS is the modern encryption standard
- SSL is older but it still works well
- It's important to note that sometimes when we are talking about HTTPS it's really TLS rather than SSL

## SSL and HTTPS

This diagram shows the link, network and transport layers, and above that application layer.

In the application layer you can see HTTP alongside the various different parts of the SSL protocol. The SSL record layer protocol. SSL handshake protocol, SSL change cipher spec protocol, and SSL alert protocol, all together this makes up the HTTPS protocol. A similar principle applies with TLS.

```
    // DIAGRAM

    | ------------------------------------------ |
    | SSL       | SSL change  | SSL alert | HTTP |
    | handshake | cipher spec | protocol  |      |
    | protocol  | protocol    |           |      |
    | ----------------------------------- |      |
    | SSL Record Layer Protocol           |      |
    | ------------------------------------------ |
    |        Transport Layer                     |
    | ------------------------------------------ |
    |        Network Layer                       |
    | ------------------------------------------ |
    |        Link Layer                          |
    | ------------------------------------------ |

```     

## HTTP vs HTTPS

HTTPS is the HTTP protocol embedded within the TLS protocol or the SSL protocol. HTTP is responsible for handling requests and responses and all the web serving mechanics. And TLS or SSL are responsible for encrypting the data sent over the network and for authenticating the identity of the server host using a certificate.

The case of FTP is similar to HTTP, in the past there was only FTP, but now to protect file transfer from attacks FTPS is used. FTPS also known as ftps FTPS, FTP SSL, and FTP secure is an extension to the commonly used FTP adding support for the TLS and formerly the SSL.

# Transport Layer in the TCP/IP model

This model is actually named in part after the most famous protocol of the transport layer, TCP, or transmission control protocol. Protocols such as FTP, HTTP, and SMTP in the application layer rely on TCP in transport layer.

## TCP (Transmission control protocol)

- Is connection-oriented
- It takes place between a client and server **initiating** or **terminating** a connection

TCP being connection-oriented means that: 
- First a **reliable connection** must be established and acknowledged, 
- and then **data can be transmitted**. 
- TCP is **reliable**. 
- It also does lots of **error checking**. For example, TCP has a checksum in its header, which is used to verify that end-to-end data has not been corrupted.
- Involves the **three-way handshake** process. The three-way handshake process occurs between a client and server when initiating or terminating a TCP connection.

## Three way handshake steps

1. Client host sends **TCP SYN** segment to server (No data sent yet). Packages are called segments in the transport layer.

2. Server host receives **SYN**, replies with **SYNACK** segment

3. Client receives **SYNACK** replies with **ACK** segment, **which may contain data**

**Note:** All this back and forth communication and deliverability is good for reliability, but it is not good in terms of speed.

## TCP versus UDP (User datagram Protocol)

- Datagram = a packet of information

- UDP protocol works similarly to TCP

- No error checking

- No handshaking

- Faster

- Examples to use UDP: live broadcasting, online games, or telephone and video conferencing over the Internet.

- Examples to use TCP when error connection is necessary: File transfer, email

## Ports and sockets

The port number is a bit like a telephone extension number in a big organization. The IP address will identify your machine on the Internet so that data can be sent to it. This is a bit like someone calling the switchboard. They will get through to the right organization this way, but not to the person who needs the message. Once connection is established, you need to know the extension number to know how to talk across that connection. When your computer receives data from outside, that message needs to be directed to the correct application process. Each application runs on a specific port number on your machine, just as each person in an organization has their own extension number. The IP address plus the port number is called a socket, which creates a complete addressing mechanism.

**IP address + port number = socket** (complete address mechanism)

This leads us to two more concepts that happen in the transport layer, **multiplexing and demultiplexing**

## Multiplexing

Multiplexing is at the sender side. There may be many processes that want to send their packets, and multiplexing is the process of passing these segments to the network layer. TCP at the transport layer accepts and collects the data it receives from all the different sockets and adds transport headers which add data related to that layer before sending them on in a single line. So multiplexing is a many-to-one process

- Sender side
- TCP collects data from multiple ports
- Multiplexing passes these segments to the network layer in one line
- Many-to-one process

## Demultiplexing

Demultiplexing, on the other hand, is the reverse process happening at the receiver side. It is one-to-many process. Packets arrive one after the other in one line, and then they are redirected to different ports. Demultiplexing checks the port numbers and delivers the datagrams to the correct applications. So demultiplexing is the process whereby the transport layer delivers data to the correct socket

- One-to-many process
- Receiver side
- Datagrams come from network layer
- TCP checks port numbers and delivers the datagrams
- Demultiplexing delivers data to the correct socket
