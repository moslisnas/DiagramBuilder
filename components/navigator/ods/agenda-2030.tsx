import React, { useState } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { headerHeight, headerPadding } from "constants/layout-size-constants";

const Container = styled.div`
    width: 100vw;
    height: calc(100vh - ${headerHeight.desktop});
    padding: 2.5vw;
    text-align: center;
    vertical-align: middle;
`;
const Wheel = styled.svg`
`;
interface Agenda2030Props{
    
}

const Agenda2030 = (props: Agenda2030Props) => {
    const [navigate, setNavigate] = useState(false);

    const animateAndNavigate = (event:any, url:string) => {
        event.preventDefault();
        setNavigate(true);
        setTimeout(() => { window.location.href=url }, 1000);
    }

    return (
        <Container>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1 }}>
                <motion.div animate={navigate ? { scale: 0, rotate: 180} : { scale: 1 }} transition={{ duration: 1 }}>
                    <Wheel width="343" height="343" viewBox="0 0 343 343" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <a href="/ods/1" onClick={(event) => animateAndNavigate(event, "/ods/1")}>
                            <path style={{cursor: "pointer"}} fill="#EB1C2D" d="M201.366 79.6041L228.482 9.58935C212.372 3.91046 195.141 0.597778 177.237 0V75.046C185.604 75.5442 193.696 77.1133 201.366 79.6041Z" />
                        </a>
                        <a href="/ods/2" onClick={(event) => animateAndNavigate(event, "/ods/2")}>
                            <path style={{cursor: "pointer"}} fill="#D3A029" d="M232.792 96.8148L283.315 41.3709C270.168 30.0629 255.302 20.6728 239.142 13.7237L212.025 83.7882C219.52 87.2503 226.492 91.634 232.792 96.8148Z" />
                        </a>
                        <a href="/ods/3" onClick={(event) => animateAndNavigate(event, "/ods/3")}>
                            <path style={{cursor: "pointer"}} fill="#279B48" d="M255.699 124.213L322.88 90.7379C314.638 75.2953 304.105 61.2724 291.73 49.0927L241.157 104.611C246.785 110.489 251.69 117.065 255.699 124.213Z" />
                        </a>
                        <a href="/ods/4" onClick={(event) => animateAndNavigate(event, "/ods/4")}>
                            <path style={{cursor: "pointer"}} fill="#C31F33" d="M267.084 157.938L341.785 151.013C339.694 133.379 334.938 116.591 327.916 101.024L260.71 134.5C263.773 141.897 265.939 149.743 267.084 157.938Z" />
                        </a>
                        <a href="/ods/5" onClick={(event) => animateAndNavigate(event, "/ods/5")}>
                            <path style={{cursor: "pointer"}} fill="#EF402B" d="M268.024 171.412C268.024 178.959 267.128 186.307 265.484 193.356L337.695 213.905C341.156 200.305 342.999 186.083 342.999 171.412C342.999 168.399 342.924 165.385 342.75 162.396L267.949 169.32C267.999 170.043 268.024 170.715 268.024 171.412Z" />
                        </a>
                        <a href="/ods/6" onClick={(event) => animateAndNavigate(event, "/ods/6")}>
                            <path style={{cursor: "pointer"}} fill="#00AED9" d="M251.345 225.686L311.205 270.892C321.14 256.944 329.058 241.477 334.487 224.864L262.276 204.315C259.512 211.937 255.827 219.11 251.345 225.686Z" />
                        </a>
                        <a href="/ods/7" onClick={(event) => animateAndNavigate(event, "/ods/7")}>
                            <path style={{cursor: "pointer"}} fill="#FDB713" d="M226.596 250.692L266.112 314.53C280.505 304.99 293.378 293.359 304.285 280.033L244.35 234.727C239.121 240.754 233.169 246.109 226.596 250.692Z" />
                        </a>
                        <a href="/ods/8" onClick={(event) => animateAndNavigate(event, "/ods/8")}>
                            <path style={{cursor: "pointer"}} fill="#8F1838" d="M194.642 265.164L208.436 338.965C225.518 335.229 241.628 328.927 256.369 320.508L216.853 256.671C209.905 260.357 202.46 263.246 194.642 265.164Z" />
                        </a>
                        <a href="/ods/9" onClick={(event) => animateAndNavigate(event, "/ods/9")}>
                            <path style={{cursor: "pointer"}} fill="#F36D25" d="M171.514 267.979C167.48 267.979 163.521 267.705 159.637 267.232L145.842 341.082C154.208 342.353 162.799 343 171.514 343C180.229 343 188.82 342.328 197.186 341.082L183.391 267.232C179.507 267.705 175.548 267.979 171.514 267.979Z" />
                        </a>
                        <a href="/ods/10" onClick={(event) => animateAndNavigate(event, "/ods/10")}>
                            <path style={{cursor: "pointer"}} fill="#E11484" d="M126.166 256.671L86.6494 320.484C101.39 328.902 117.526 335.204 134.582 338.94L148.377 265.139C140.558 263.246 133.113 260.357 126.166 256.671Z" />
                        </a>
                        <a href="/ods/11" onClick={(event) => animateAndNavigate(event, "/ods/11")}>
                            <path style={{cursor: "pointer"}} fill="#F99D26" d="M98.6801 234.727L38.7451 280.008C49.6514 293.334 62.5249 304.965 76.9172 314.505L116.434 250.667C109.86 246.109 103.909 240.754 98.6801 234.727Z" />
                        </a>
                        <a href="/ods/12" onClick={(event) => animateAndNavigate(event, "/ods/12")}>
                            <path style={{cursor: "pointer"}} fill="#CF8D2A" d="M80.7479 204.315L8.53711 224.864C13.9903 241.477 21.8836 256.944 31.8188 270.892L91.6791 225.686C87.197 219.11 83.5118 211.937 80.7479 204.315Z" />
                        </a>
                        <a href="/ods/13" onClick={(event) => animateAndNavigate(event, "/ods/13")}>
                            <path style={{cursor: "pointer"}} fill="#48773E" d="M74.9996 171.413C74.9996 170.715 75.0494 170.043 75.0494 169.345L0.249003 162.421C0.0747008 165.385 0 168.399 0 171.413C0 186.083 1.84262 200.305 5.30376 213.905L77.5145 193.356C75.8711 186.307 74.9996 178.96 74.9996 171.413Z" />
                        </a>
                        <a href="/ods/14" onClick={(event) => animateAndNavigate(event, "/ods/14")}>
                            <path style={{cursor: "pointer"}} fill="#007DBC" d="M82.3243 134.5L15.1185 101.024C8.0966 116.591 3.34065 133.404 1.24902 151.013L75.9498 157.938C77.0952 149.743 79.2615 141.897 82.3243 134.5Z" />
                        </a>
                        <a href="/ods/15" onClick={(event) => animateAndNavigate(event, "/ods/15")}>
                            <path style={{cursor: "pointer"}} fill="#5DBB46" d="M101.865 104.612L51.2674 49.1179C38.892 61.2976 28.3592 75.3205 20.1172 90.7631L87.2981 124.239C91.3319 117.065 96.2373 110.49 101.865 104.612Z"/>
                        </a>
                        <a href="/ods/16" onClick={(event) => animateAndNavigate(event, "/ods/16")}>
                            <path style={{cursor: "pointer"}} fill="#02558B" d="M130.998 83.7882L103.882 13.7237C87.7218 20.6728 72.8563 30.038 59.709 41.3709L110.232 96.8148C116.531 91.634 123.503 87.2503 130.998 83.7882Z" />
                        </a>
                        <a href="/ods/17" onClick={(event) => animateAndNavigate(event, "/ods/17")}>
                            <path style={{cursor: "pointer"}} fill="#183668" d="M165.782 75.046V0C147.879 0.597778 130.648 3.91046 114.537 9.58935L141.653 79.6041C149.323 77.1133 157.415 75.5442 165.782 75.046Z" />
                        </a>
                    </Wheel>
                </motion.div>
            </motion.div>
        </Container>
    )
}

export default Agenda2030;