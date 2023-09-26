export default function loadBalancer(chinaDownload, USDownload) {
	return Promise
	.race([chineDownload, USDownload])
	.then((res) => res);
}
