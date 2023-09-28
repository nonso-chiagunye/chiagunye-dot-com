'use strict';

export const projectDetails = [
  `Cloudflare Zero Trust Network Access provides secure perimeter security for both cloud and on-prem resources. As a secure web proxy, it enables creation of and enforcement of defined secuirty pocicies for all inbound traffic to both cloud and on-prem workloads. By ensuring no implicit trust for all network access, Cloudflare ZTNA helps to reduce threats such as lateral movement.

  This project involved enabling Cloudflare ZTNA teams with both device posture and gateway policies. Creating access tunnels to over 300 private subnets on both on-prem and cloud. All managed with Terraform IaC. Part of the project also involed creating installation scripts for cloudlfare Warp clients on both Windows, Linux and Mac machines`,
  `CyberArk Priviledged Account Management is a tool that offers a secure centralized repository for storing privileged accounts - accounts with elevated privileges like root or Admin accounts. It enables creation of access key rotation policies for SSH Keys, Domain accounts and Database accounts, with a session recording capabilities that records all activities of privileged users, and stores the records inside the secure vote. 

  I was involved in this project that included deploying redundant copies of Vault, Central Policy Manager (CPM), Privileged Sesion Manager (PSM/PSMP), Privileged Threat Analyzer (PTA), and Pawword Vault Web Access (PVWA) - all connected through a Transit Gateway connection`,
  `Prometheus is an open-source monitoring and alerting tool used for collecting and storing time-series data related to various metrics, such as CPU usage, memory usage, network latency, and application-specific metrics. In our case, this was used to monitor a critical security infrastructure.

  In this project, I installed prometheus on a Kubernetes (EKS) Cluster using Prometheus helm-chart. Configured alert rules on Prometheus Alert Manager. Setup a Slack channel and with the slack API, configured alertmanager to send system alert to a private slack channel. Finnally, installed Prometheus Node exporters (Linux) and WMI Exporters (Windows) on the machines that aremonitored`,
  `Wazuh is an open-source SIEM platform designed for threat detection, analysis, and response. It focuses on providing security monitoring, intrusion detection.
  Amazon Security Lake is an AWS Service that provides Security data Lake for both AWS services and third party services. It collects Security logs from multiple sources (both AWS and none AWS Sources), transforms them into the standard Open CyberSecurity Schema Framework (OCSF) and stores them as Paquets in S3 to be ingested by different SIEM/Analytics subscribers.
  
  In this project, I enabled Security Lake as a delegated Administrator, created Subscriber as Wazuh, with relevant roles and permissions. Also configured SQS queue for polling Data Access by Wazuh. The final step involved updating Wazuh Manager configuration with the queue name and IAM roles to access generated logs`,
  `This project involed importing all Security related configurations on multiple AWS accounts to be managed by terraform`,
];
