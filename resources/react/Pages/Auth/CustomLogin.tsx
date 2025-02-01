import React, { useState } from 'react'
import LogoImg from '../../assets/images/logo-2.png'
import Login from '@react-login-page/page8';
import { toast } from 'react-toastify';
import { BaseApi } from '@/Context/MainContext';
import { AxiosError, isAxiosError } from 'axios';
import * as Components from "../../Components/Components";

const CustomLogin = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [signIn, toggle] = React.useState(true);
    const [password, setPassword] = useState('');


    const onLogin = async () => {
        if (email == '' || password == '') {
            alert("Please Enter Email & Password");
        } else {
            if (!signIn) {
                if (name == '') {
                    alert("Please Enter Name");
                    return;
                }
            }
            try {
                let data: any = { email, password };
                if (!signIn) {
                    data.name = name;
                }
                const response = await BaseApi.post(signIn ? "/login" : "/register", data);
                if (response.status == 200) {
                    const { token } = response.data;
                    localStorage.setItem("jwtToken", token); // Store token in localStorage (or use cookies)
                    if (!signIn) {
                        alert("Create Account Success");
                        window.location.reload();
                    } else {
                        window.location.replace("/");
                    }
                }
            } catch (error: any) {
                if (isAxiosError(error)) {
                    if (error.response?.status == 401) {
                        alert("Please Check Your Email & Password");
                    }
                }
            }
        }
    }




    return (
        <div className='flex justify-center items-center h-[100vh]'>
            <Components.Container>
                <Components.SignUpContainer signingIn={signIn}>
                    <Components.Form>
                        <Components.Title style={{ fontSize: 22, fontWeight: 700 }}>Create Account</Components.Title>
                        <Components.Input
                            onChange={(e) => {
                                setName(e.target.value);
                            }}
                            value={name}
                            type="text" placeholder="Name" />
                        <Components.Input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            type="email" placeholder="Email" />
                        <Components.Input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            type="password" placeholder="Password" />
                        <Components.Button onClick={onLogin}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>
                <Components.SignInContainer signingIn={signIn}>
                    <Components.Form>
                        <Components.Title style={{ fontSize: 22, fontWeight: 700 }}>Sign in</Components.Title>
                        <Components.Input
                            onChange={(e) => {
                                setEmail(e.target.value);
                            }}
                            value={email}
                            type="email" placeholder="Email" />
                        <Components.Input
                            onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            value={password}
                            type="password" placeholder="Password" />
                        <Components.Anchor href="#">Forgot your password?</Components.Anchor>
                        <Components.Button onClick={onLogin}>Sign In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>
                <Components.OverlayContainer signingIn={signIn}>
                    <Components.Overlay signingIn={signIn}>
                        <Components.LeftOverlayPanel signingIn={signIn}>
                            <Components.Title>
                                <img src={LogoImg} style={{ marginBottom: 5, width: '80px', padding: '5px 7px', backgroundColor: "#fff", borderRadius: 5 }} />
                            </Components.Title>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>
                        <Components.RightOverlayPanel signingIn={signIn}>
                            <Components.Title>
                                <img src={LogoImg} style={{ marginBottom: 5, width: '80px', padding: '5px 7px', backgroundColor: "#fff", borderRadius: 5 }} />
                            </Components.Title>

                            <Components.Title>Hello Friend's</Components.Title>
                            <Components.Paragraph>
                                Enter your personal details and start journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sign Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>
                    </Components.Overlay>
                </Components.OverlayContainer>
            </Components.Container>
        </div>
    )
}

export default CustomLogin