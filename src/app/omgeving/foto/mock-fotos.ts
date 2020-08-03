import { Foto } from "./foto.model";

const JsonFotos = [
    {
        datum: "2020-03-09 16:50:09",
        url: "https://dl.dropboxusercontent.com/apitl/1/AVtXUo4BaOzCv4RR8NM26MXdF9QrZJP92yCHSWElvqHtzZa9Ghyu6pKTgQ34Byy0Qd8n5eRXAiUBZygprox08tf3z89XA7EvdA_s0Ajx9BPtESM8aoVprPA8ZW7bpAvzS5Nj797ZJ1B3X_2y0jw2OlzHG-4h0TPrfdg7Z0l5Mqqp4GuWaZ8KVE75Zq2evbx66DAyZAxKKNiNhzCLRwaUUdM4KXp0LUzccOIpAnCaZnWepHMKvceQehTzzSl7rxS8oN3m1LgseYRMbfCqjumvJLaXIRJgvM028ZiuIqNBTwwVU2bcbfAnX5kSio7_NFTk6zqARvGL3ZPAgjeuv7QOoXf0qJJI9ZWnvig8sIuoxXw06S5gpX3E96OEHsq01iNXt4g"
    }
];

export const FOTOS: Foto[] = JsonFotos.map(Foto.fromJSON);