# Security Devices

## Firewall

- First line of defense
- Layers: 2,3,4,7
- Settable in routers, hosts, or own device
- Block entering or leaving
    - Stateless inspection: Once a packet passes a set of rules
    - Stateful inspection: Examines when connection is made from internal network to an external network 

## IDS - Intrusion Detection System

- Identify when an attack is occurring
- Receives a copy of all traffic and evaluates to a set if standards:
    - Signature based: Known attack signatures
    - Anomaly based: Suspicious changes
    - Policy based: specific declared policy

## IPS - Intrusion Prevention System

- Designed to stop attack from damaging the network
- All traffic is evaluated against a set of standards
- Best placement is between router and the destination network

## VPN Concentrators - Virtual Private Network

- Layers 2,3,7
- A VPN concentrator will allow for many more secure VPN connectors to the network
- Layer 7 used for internet transactions
- Layer 3 is more common, provides IPsec encryption

# Optimization and performance devices

## Load Balancer

- Also called content switch or content filter
- Used to distribute the request (workload) to a server among other servers, helping to ensure no single server gets overloaded

## Proxy Server

- A proxy server request resources on behalf of client machines 
- Hides and protects the requesting client 
- Can be used to filter content
- Can increase network performance by caching common requests to webpages