import { nodeSizes, nodeGaps } from "constants/nodes/infrastructure";

interface Infrastructure{
	id: number;
	lld_name: string;
	lldVersions: LldVersion[]
	environments: Environment[];
	applications: Application[];

};
interface LldVersion{
	version: string;
}
interface Environment{
	name: string;
	servers: Server[];
}
interface Server{
	type: string;
	name: string;
	power: string;
    memory: string;
    infrastructure: string;
    functionality: string;
    virtualizationTechnology?: string;
	osType: string;
	osTemplate: string;
	observationsOs: string;
	networks: Network[];
    dns: string;
    ntp: string;
	observationsNetwork: string;
	backupPolicy: string;
    contingency: boolean;
    prd: boolean;
    prdPower?: string;
	observationsBackup: string;
}
interface Network{
	name: string;
	value: string;
}
interface Application{
	type: string;
	name: string;
}

const getInfrastructureById = (id:number) => {
	let result:Infrastructure = { id: id, lld_name: '', lldVersions: [], environments: [], applications: [] };

	switch(id){
		case 1:
			result.lld_name = "DEMO IMPLANTACION: OM servidor consola NB Critics (WNBCSP01)";
			result.lldVersions.push({version: "1.00.0"});
			result.lldVersions.push({version: "1.01.0"});
			result.lldVersions.push({version: "2.00.0"});
			// let environment1 = {
			// 	name: "DESA", servers: []
			// };
			// result.environments.push(environment1);
			let environment2 = {
				name: "PRE", servers: [
					{
						type: "virtual", name: "WNBCST01", power: "2", memory: "16",
						infrastructure: "CTTI Critics Cerdanyola", functionality: "Servidor consola NB Crítics PRE",
						virtualizationTechnology: "VCO", osType: "Windows", osTemplate: "CTTI - Windows 2019 std",
						observationsOs: "Plantilla per al CTTI",
						networks: [{name: "CAS", value: "CTT_MGM_PUB_BACKUP_CRITICS_PRE"}, {name: "BKP", value: "ICT_BKP_BACKUP-VERITAS_CRD_PRE"}],
						dns: "", ntp: "",
						observationsNetwork: "Ús del DNS intern de T-Systems",
						backupPolicy: "Otro", contingency: false, prd: false,
						observationsBackup: "Utilitzar la política 1 de T-Systems"
					}
				]
			};
			result.environments.push(environment2);
			let environment3 = {
				name: "PRO", servers: [
					{
						type: "virtual", name: "WNBCSP01", power: "2", memory: "16",
						infrastructure: "CTTI Critics Cerdanyola", functionality: "Servidor consola NB Crítics",
						virtualizationTechnology: "VCO", osType: "Windows", osTemplate: "CTTI - Windows 2019 std",
						observationsOs: "Plantilla per al CTTI",
						networks: [{name: "CAS", value: "CTT_MGM_PUB_BACKUP_CRITICS"}, {name: "BKP", value: "ICT_BKP_BACKUP-VERITAS_CRD"}],
						dns: "", ntp: "",
						observationsNetwork: "Ús del DNS intern de T-Systems",
						backupPolicy: "Otro", contingency: false, prd: false,
						observationsBackup: "Utilitzar la política 1 de T-Systems"
					},
					{
						type: "virtual", name: "WNBCSP02", power: "2", memory: "16",
						infrastructure: "CTTI Critics Cerdanyola", functionality: "Servidor consola NB Crítics #2",
						virtualizationTechnology: "VCO", osType: "Windows", osTemplate: "CTTI - Windows 2019 std",
						observationsOs: "Plantilla per al CTTI",
						networks: [{name: "CAS", value: "CTT_MGM_PUB_BACKUP_CRITICS"}, {name: "BKP", value: "ICT_BKP_BACKUP-VERITAS_CRD"}],
						dns: "", ntp: "",
						observationsNetwork: "Ús del DNS intern de T-Systems",
						backupPolicy: "Otro", contingency: false, prd: false,
						observationsBackup: "Utilitzar la política 1 de T-Systems"
					}
				]
			};
			result.environments.push(environment3);
			result.applications.push({type: "web", name: "Apache HTTP - Apache" });
			break;
		default:
			break;
	}

	return result;
}

export const getInfrastructureNodesData = (infrastructureId:number, nodeDisplayHandler:any):any[] => {
	const result:any[] = [];

	let infrastructure = getInfrastructureById(infrastructureId);
	let position = [0, 0];
	let lldNodeWidth:number = nodeSizes.lld[0];
	let lldNodeHeight:number = nodeSizes.lld[1];
	let lldNodeXGap:number = nodeGaps.lld[0];
	let lldVersionDisplacementX:number = lldNodeWidth + lldNodeXGap;
	let environmentNodeWidth:number = nodeSizes.environment[0];
	let environmentNodeXGap:number = nodeGaps.environment[0];
	let environmentNodeYGap:number = nodeGaps.environment[1];
	let environmentDisplacementX:number = environmentNodeWidth + environmentNodeXGap;
	let serverNodeWidth:number = nodeSizes.server[0];
	let serverNodeXGap:number = nodeGaps.server[0];
	let serverDisplacementX:number = serverNodeWidth + serverNodeXGap;
	let networkNodeWidth:number = nodeSizes.network[0];
	let networkNodeXGap:number = nodeGaps.network[0];
	let networkDisplacementX:number = networkNodeWidth + networkNodeXGap;

	//LLD version nodes.
	infrastructure.lldVersions.map((version, index) => {
		if(index !== infrastructure.lldVersions.length-1){
			result.push(
				{
					id: `LLDVersion-${version.version}`,
					data: { label: `${infrastructure.lld_name} (v${version.version})`, number: version.version, firstVersion: index===0 },
					position: { x: index*lldVersionDisplacementX, y: 0 },
					type: "lldVersion",
					draggable: false
				}
			);
			position[0] += lldVersionDisplacementX;
		}
	});
	//LLD node.
	result.push(
		{
			id: `LLD-${infrastructure.lldVersions[infrastructure.lldVersions.length-1].version}`,
			data: {
				label: `${infrastructure.lld_name} (v${infrastructure.lldVersions[infrastructure.lldVersions.length-1].version})`,
				number: infrastructure.lldVersions[infrastructure.lldVersions.length-1].version,
				hasVersions: infrastructure.lldVersions.length>1
			},
			position: { x: position[0], y: 0 },
			type: "lld",
			draggable: false
		}
	);
	
	//Environments.
	position[1] += lldNodeHeight + environmentNodeYGap;
	let totalEnvironmentsWidth = environmentNodeWidth*infrastructure.environments.length + environmentNodeXGap*(infrastructure.environments.length-1);
	let totalServers = 0;
	infrastructure.environments.map((environment) => {
		totalServers += environment.servers.length;
	});
	let totalServersWidth = serverNodeWidth*totalServers + serverNodeXGap*(totalServers-1);
	if(infrastructure.environments.length > 0){
		if(totalServersWidth > totalEnvironmentsWidth){
			position[0] += -(totalServersWidth/2);
		}
		else{
			if(infrastructure.environments.length > 1){
				position[0] += -(totalEnvironmentsWidth/2);
			}
		}
	}
	position[0] += lldNodeWidth/2;

	infrastructure.environments.map((environment) => {
		let initialEnvironmentXPosition = position[0];
		//Servers.
		environment.servers.map((server) => {
			result.push(
				{
					id: `Server-${server.name}`,
					data: {
						name: server.name,
						type: server.type,
						power: server.power,
						memory: server.memory,
						infrastructure: server.infrastructure,
						functionality: server.functionality,
						osType: server.osType,
						osTemplate: server.osTemplate,
						observationsOs: server.observationsOs,
						dns: server.dns,
						ntp: server.ntp,
						observationsNetwork: server.observationsNetwork,
						backupPolicy: server.backupPolicy,
						contingency: server.contingency,
						prd: server.prd,
						observationsBackup: server.observationsBackup,
						nodeDisplayHandler: nodeDisplayHandler
					},
					position: { x: position[0], y: position[1]+nodeSizes.environment[1]+nodeGaps.server[1] },
					type: "server",
					draggable: false
				}
			);
			//Networks.
			if(server.networks.length > 0){
				let totalNetworksWidth = networkNodeWidth*server.networks.length + networkNodeXGap*(server.networks.length-1);
				server.networks.map((network, index) => {
					let networkXDisplacement = -(totalNetworksWidth/2)+(serverNodeWidth/2)+networkDisplacementX*index;
					result.push(
						{
							id: `Network-${network.value}_Server-${server.name}`,
							data: {
								name: network.name,
								value: network.value,
								serverRelated: server.name,
								observations: server.observationsNetwork
							},
							position: { x: position[0] + networkXDisplacement, y: position[1]+nodeSizes.environment[1]+nodeGaps.server[1]+nodeSizes.server[1]-50 },
							type: "network",
							draggable: false
						}
					);
				});
			}
			position[0] += serverDisplacementX;
		});
		//Environment.
		let environmentXFinalDisplacement = environmentDisplacementX;
		if(totalServersWidth > totalEnvironmentsWidth){
			environmentXFinalDisplacement = environment.servers.length>0 ? serverDisplacementX*(environment.servers.length-1)/2 : -environmentDisplacementX;
		}
		else{
			environmentXFinalDisplacement = environment.servers.length===0 ? -environmentDisplacementX : serverDisplacementX*(environment.servers.length-1)/2;
		}
		result.push(
			{
				id: `Environment-${environment.name}`,
				data: {
					label: environment.name,
					hasServers: environment.servers.length>0
				},
				position: { x: initialEnvironmentXPosition+environmentXFinalDisplacement, y: position[1] },
				type: "environment",
				draggable: false
			}
		);
	});

	//Applications.
	//Filesystems and disks.
	//Networks.
	//Users.

	return result;
};
export const getInfrastructureEdgesData = (infrastructureId:number):any[] => {
	const result:any[] = [];

	let infrastructure = getInfrastructureById(infrastructureId);
	//LLD versions.
	infrastructure.lldVersions.map((version, index) => {
		//Push version-version relationship.
		if(index>0){
			if(index !== infrastructure.lldVersions.length-1){
				result.push(
					{
						id: "LLDVersion-"+infrastructure.lldVersions[index-1].version+"-LLDVersion-"+version.version,
						source: "LLDVersion-"+infrastructure.lldVersions[index-1].version,
						target:"LLDVersion-"+version.version,
						style: { stroke: '#000000' }
					}
				);
			}
			else{
				result.push(
					{
						id: "LLDVersion-"+infrastructure.lldVersions[index-1].version+"-LLD-"+version.version,
						source: "LLDVersion-"+infrastructure.lldVersions[index-1].version,
						target:"LLD-"+version.version,
						style: { stroke: '#000000' }
					}
				);
			}
		}
	});
	//Environments.
	infrastructure.environments.map((environment) =>{
		result.push(
			{
				id: `LLD-${infrastructure.lldVersions[infrastructure.lldVersions.length-1].version}-Environment-${environment.name}`,
				source: `LLD-${infrastructure.lldVersions[infrastructure.lldVersions.length-1].version}`,
				target: `Environment-${environment.name}`,
				style: { stroke: '#000000' }
			}
		);
		//Servers.
		environment.servers.map((server) => {
			result.push(
				{
					id: `Environment-${environment.name}-Server-${server.name}`,
					source: `Environment-${environment.name}`,
					target: `Server-${server.name}`,
					style: { stroke: '#000000' }
				}
			);
			//Networks.
			server.networks.map((network) => {
				result.push(
					{
						id: `Network-${network.value}_Server-${server.name}-Server-${server.name}`,
						source: `Server-${server.name}`,
						target: `Network-${network.value}_Server-${server.name}`,
						style: { stroke: '#000000' }
					}
				);
			});
		});
	});

	return result;
}