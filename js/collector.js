const client = new ClientJS();

export const getFingerprint = () => {  

    let fingerprint = client.getFingerprint();
    return fingerprint

}
export const getCpu = () => { 

    let CPU = client.getCPU();
    return CPU;

}
export const getOs = () => { 

    let OS = client.getOS();
    return OS;

}
export const getUserAgent = () => { 

    let userAgent = client.getUserAgent();
    return userAgent;
 
}
