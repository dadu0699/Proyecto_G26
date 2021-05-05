# **Manual de Construcción y Configuración**

## **Contenido**   
- [Tablas de configuraciones](#idTBConf)
- [Topología 1](#idTopo1)
- [Topología 2](#idTopo2)
- [Topología 3](#idTopo3)
- [Configuración VPN ](#idVPN)

## **Tablas de configuraciones**<a name="idTBConf"></a>


## Topología 1<a name="idTopo1"></a>
| DIRECCIÓN DE RED | PRIMERA ASIGNABLE | ULTIMA ASIGNABLE | BROADCAST       | MASCARA         | HOSTS NECESARIOS | CANTIDAD DE HOSTS |
|------------------|-------------------|------------------|-----------------|-----------------|------------------|-------------------|
| 10.26.0.0        | 10.26.0.1         | 10.26.0.6        | 10.26.0.7       | 255.255.255.248 | 4                | 6                 |
| 10.26.0.8        | 10.26.0.9         | 10.26.0.14       | 10.26.0.15      | 255.255.255.248 | 4                | 6                 |
| 10.26.0.16       | 10.26.0.17        | 10.26.0.22       | 10.26.0.23      | 255.255.255.248 | 3                | 6                 |
| 10.26.0.24       | 10.26.0.25        | 10.26.0.30       | 10.26.0.31      | 255.255.255.248 | 3                | 6                 |

## Topología 2<a name="idTopo2"></a>


### Tabla de direccionamiento IP
| VLAN | DIRECCIÓN DE RED | PRIMERA ASIGNABLE | ULTIMA ASIGNABLE | BROADCAST       | MASCARA         | HOSTS NECESARIOS | CANTIDAD DE HOSTS |
|:----:|------------------|-------------------|------------------|-----------------|-----------------|------------------|-------------------|
| 10   | 192.168.126.192  | 192.168.126.193   | 192.168.126.222  | 192.168.126.223 | 255.255.255.224 | 23               | 32                |
| 20   | 192.168.126.224  | 192.168.126.225   | 192.168.126.238  | 192.168.126.239 | 255.255.255.240 | 10               | 16                |
| 30   | 192.168.126.0    | 192.168.126.1     | 192.168.126.126  | 192.168.126.127 | 255.255.255.128 | 125              | 128               |
| 40   | 192.168.126.128  | 192.168.126.129   | 192.168.126.190  | 192.168.126.191 | 255.255.255.192 | 39               | 64                |

``` bash
-------------------------------------------- TRONCALES
-------- ESW1
conf t

int f1/0
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/1
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/2
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/3
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/4
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

end
-------- ESW2
conf t

int f1/0
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/1
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/2
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/3
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/4
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/5
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/6
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/7
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/8
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

end
-------- ESW3
conf t

int f1/0
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/1
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/2
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/3
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/4
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/5
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/6
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/7
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/8
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

end
-------- ESW4
conf t

int f1/0
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/1
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/2
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/3
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/4
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/5
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/6
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/7
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/8
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

int f1/9
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,1002-1005
exit

end
-------------------------------------------- VTP
-------- ESW1
conf t

vtp domain redes1gp26
vtp password redes1gp26
vtp mode server

end
-------- ESW2
conf t

vtp domain redes1gp26
vtp password redes1gp26
vtp mode client

end
-------- ESW3
conf t

vtp domain redes1gp26
vtp password redes1gp26
vtp mode client

end
-------- ESW4
conf t

vtp domain redes1gp26
vtp password redes1gp26
vtp mode client

end
-------------------------------------------- VLAN
-------- ESW1 o ESW4?
conf t 

vlan 10
name RHUMANOS
exit

vlan 20
name CONTABILIDAD
exit

vlan 30
name VENTAS
exit

vlan 40
name INFORMATICA
exit

end
-------------------------------------------- port-channel
-------- SW1
conf t

int range f1/0 -1
channel-group 3 mode on
exit

int range f1/2 -3
channel-group 4 mode on
exit

end
-------- SW2
conf t

int range f1/2 -3
channel-group 2 mode on
exit

int range f1/0 -1
channel-group 3 mode on
exit

int range f1/4 -6
channel-group 5 mode on
exit

end
-------- SW3
conf t

int range f1/0 -1
channel-group 1 mode on
exit

int range f1/2 -3
channel-group 4 mode on
exit

int range f1/4 -6
channel-group 5 mode on
exit

end
-------- SW4
conf t

int range f1/0 -1
channel-group 1 mode on
exit

int range f1/2 -3
channel-group 2 mode on
exit

end
-------------------------------------------- STP
-------- SW1
conf t
spanning-tree vlan 10 root primary
spanning-tree vlan 20 root primary
spanning-tree vlan 30 root primary
spanning-tree vlan 40 root primary
end
-------------------------------------------- 
-------- R1
conf t

int f0/0.10
encapsulation dot1q 10
ip address 192.168.126.193 255.255.255.224
ip dhcp pool rrhh
network 192.168.126.192 255.255.255.224
default-route 192.168.126.193
exit

int f0/0.20
encapsulation dot1q 20
ip address 192.168.126.225 255.255.255.240
ip dhcp pool conta
network 192.168.126.224 255.255.255.240
default-route 192.168.126.225
exit

int f0/0.30
encapsulation dot1q 30
ip address 192.168.126.1 255.255.255.128
ip dhcp pool ventas
network 192.168.126.0 255.255.255.128
default-route 192.168.126.1
exit

int f0/0.40
encapsulation dot1q 40
ip address 192.168.126.129 255.255.255.192
ip dhcp pool informatica
network 192.168.126.128 255.255.255.192
default-route 192.168.126.129
exit

int f0/0
no shutdown
exit

end
```

## Topología 3<a name="idTopo3"></a>

### Tabla 1
| VLAN | DIRECCIÓN DE RED | PRIMERA ASIGNABLE | ULTIMA ASIGNABLE | BROADCAST       | MASCARA         | HOSTS NECESARIOS | CANTIDAD DE HOSTS |
|:----:|------------------|-------------------|------------------|-----------------|-----------------|------------------|-------------------|
| 10   | 192.168.126.0    | 192.168.126.1     | 192.168.126.6    | 192.168.126.7   | 255.255.255.248 | 6                | 8                 |
| 20   | 192.168.126.8    | 192.168.126.9     | 192.168.126.14   | 192.168.126.15  | 255.255.255.248 | 6                | 8                 |
| 30   | 192.168.126.16   | 192.168.126.17    | 192.168.126.22   | 192.168.126.23  | 255.255.255.248 | 6                | 8                 |
| 40   | 192.168.126.24   | 192.168.126.25    | 192.168.126.30   | 192.168.126.31  | 255.255.255.248 | 6                | 8                 |
| 50   | 192.168.126.32   | 192.168.126.33    | 192.168.126.38   | 192.168.126.39  | 255.255.255.248 | 6                | 8                 |


### Tabla 2
| VIRTUALIZADA |   DISPOSITIVO    | VLAN |   DIRECCIÓN IP   |   MASCARA DE RED   |    GATEWAY      |
|:------------:|------------------|------|------------------|--------------------|-----------------|
|     NO       | ADMINISTRADORES  |  10  |   AUTOMÁTICA     |  255.255.255.248   | 192.168.126.1   |
|     SI       |   SRV_BD         |  20  | 192.168.126.10   |  255.255.255.248   | 192.168.126.9   |
|     SI       |   SRV_WEB        |  30  | 192.168.126.18   |  255.255.255.248   | 192.168.126.17  |
|     SI       |   SRV_RRHH       |  40  | 192.168.126.26   |  255.255.255.248   | 192.168.126.25  |
|     SI       |   SRV_CONTA      |  50  | 192.168.126.34   |  255.255.255.248   | 192.168.126.33  |

``` bash
-------------------------------------------- VLAN
-------- ESW1
conf t 

vlan 10
name ADMIN
exit

vlan 20
name BD
exit

vlan 30
name WEB
exit

vlan 40
name RRHH
exit

vlan 50
name CONTA
exit

end
-------------------------------------------- TRONCALES
-------- ESW1
conf t

int fa1/1
switchport mode access
switchport access vlan 10
exit

int fa1/2
switchport mode access
switchport access vlan 10
exit

int fa1/3
switchport mode access
switchport access vlan 20
exit

int fa1/4
switchport mode access
switchport access vlan 30
exit

int fa1/5
switchport mode access
switchport access vlan 40
exit

int fa1/6
switchport mode access
switchport access vlan 50
exit

int f1/0
switchport mode trunk
switchport trunk allowed vlan 1,10,20,30,40,50,1002-1005
exit

end
-------------------------------------------- 
-------- R1
conf t

int f0/0.10
encapsulation dot1q 10
ip address 192.168.126.1 255.255.255.248
ip dhcp pool admin
network 192.168.126.0 255.255.255.248
default-route 192.168.126.1
exit

int f0/0.20
encapsulation dot1q 20
ip address 192.168.126.9 255.255.255.248
exit

int f0/0.30
encapsulation dot1q 30
ip address 192.168.126.17 255.255.255.248
exit

int f0/0.40
encapsulation dot1q 40
ip address 192.168.126.25 255.255.255.248
exit

int f0/0.50
encapsulation dot1q 50
ip address 192.168.126.33 255.255.255.248
exit

int f0/0
no shutdown
exit

end
```
