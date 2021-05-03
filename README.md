# **Manual de Construcción y Configuración**

## **Contenido**   
- [Tablas de configuraciones](#idTBConf)
- [Topología 1](#idTopo1)
- [Topología 2](#idTopo2)
- [Topología 3](#idTopo3)
- [Configuración VPN ](#idVPN)

## **Tablas de configuraciones**<a name="idTBConf"></a>


## Topología 1<a name="idTopo1"></a>


## Topología 2<a name="idTopo2"></a>


### Tabla de direccionamiento IP
| VLAN | DIRECCIÓN DE RED | PRIMERA ASIGNABLE | ULTIMA ASIGNABLE | BROADCAST       | MASCARA         | HOSTS NECESARIOS | CANTIDAD DE HOSTS |
|:----:|------------------|-------------------|------------------|-----------------|-----------------|------------------|-------------------|
| 10   | 192.168.126.192  | 192.168.126.193   | 192.168.126.222  | 192.168.126.223 | 255.255.255.224 | 23               | 32                |
| 20   | 192.168.126.224  | 192.168.126.225   | 192.168.126.238  | 192.168.126.239 | 255.255.255.240 | 10               | 16                |
| 30   | 192.168.126.0    | 192.168.126.1     | 192.168.126.126  | 192.168.126.127 | 255.255.255.128 | 125              | 128               |
| 40   | 192.168.126.128  | 192.168.126.129   | 192.168.126.190  | 192.168.126.191 | 255.255.255.192 | 39               | 64                |


## Topología 3<a name="idTopo3"></a>

### Tabla 1
| VLAN | DIRECCIÓN DE RED | PRIMERA ASIGNABLE | ULTIMA ASIGNABLE | BROADCAST       |
|:----:|------------------|-------------------|------------------|-----------------|
| 10   | 192.168.xxx.xxx  | 192.168.xxx.xxx   | 192.168.xxx.xxx  | 192.168.xxx.xxx |
| 20   | 192.168.xxx.xxx  | 192.168.xxx.xxx   | 192.168.xxx.xxx  | 192.168.xxx.xxx |
| 30   | 192.168.xxx.xxx  | 192.168.xxx.xxx   | 192.168.xxx.xxx  | 192.168.xxx.xxx |
| 40   | 192.168.xxx.xxx  | 192.168.xxx.xxx   | 192.168.xxx.xxx  | 192.168.xxx.xxx |
| 50   | 192.168.xxx.xxx  | 192.168.xxx.xxx   | 192.168.xxx.xxx  | 192.168.xxx.xxx |


### Tabla 2
| VIRTUALIZADA |   DISPOSITIVO    | VLAN |   DIRECCIÓN IP   |   MASCARA DE RED   |    GATEWAY      |
|:------------:|------------------|------|------------------|--------------------|-----------------|
|     NO       | ADMINISTRADORES  |  10  |   AUTOMÁTICA     |  192.168.xxx.xxx   | 255.255.255.224 |
|     SI       |   SRV_BD         |  20  | 192.168.xxx.xxx  |  192.168.xxx.xxx   | 255.255.255.240 |
|     SI       |   SRV_WEB        |  30  | 192.168.xxx.xxx  |  192.168.xxx.xxx   | 255.255.255.128 |
|     SI       |   SRV_RRHH       |  40  | 192.168.xxx.xxx  |  192.168.xxx.xxx   | 255.255.255.192 |
|     SI       |   SRV_CONTA      |  50  | 192.168.xxx.xxx  |  192.168.xxx.xxx   | 255.255.255.192 |
