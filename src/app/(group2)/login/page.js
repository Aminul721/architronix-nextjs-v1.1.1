import React from 'react'
import feedback_bg from "@/assets/images/feedback-image.jpg"
import InputFiled from '@/components/ui/inputFiled'
import ButtonOutline2 from '@/components/ui/buttons/buttonOutline2'
import RightArrow from '@/assets/icons/rightArrow'
import Link from 'next/link'

const LoginPage = () => {
    const currentYear = new Date().getFullYear();
    return (
        <section className='py-8.5 lg:py-17.5'>
            <div className='container'>
                <div className='grid lg:grid-cols-2 gap-0' style={{ backgroundImage: `url(${feedback_bg.src})`, backgroundPosition: "center top", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className="login-page-txt flex flex-col justify-center px-3.5 lg:px-7.5 py-8.5 lg:py-17.5">
                        <a className="py-0 inline-flex" href="/">
                            <span className="logo text-secondary">
                                <svg width="219" height="31" viewBox="0 0 219 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M196.212 30.2799L203.852 19.3199L196.172 8.43994H203.132L208.892 16.9199H205.852L211.612 8.43994H218.572L210.892 19.3199L218.492 30.2799H211.572L205.932 21.7999H208.812L203.172 30.2799H196.212Z" />
                                    <path d="M187.541 30.28V8.43998H193.541V30.28H187.541ZM187.541 6.47998V0.47998H193.541V6.47998H187.541Z" />
                                    <path
                                        d="M163.596 30.28V8.43996H169.196V12.76L168.876 11.8C169.383 10.4933 170.196 9.5333 171.316 8.91996C172.463 8.27996 173.796 7.95996 175.316 7.95996C176.969 7.95996 178.409 8.30663 179.636 8.99996C180.889 9.69329 181.863 10.6666 182.556 11.92C183.249 13.1466 183.596 14.5866 183.596 16.24V30.28H177.596V17.52C177.596 16.6666 177.423 15.9333 177.076 15.32C176.756 14.7066 176.289 14.2266 175.676 13.88C175.089 13.5333 174.396 13.36 173.596 13.36C172.823 13.36 172.129 13.5333 171.516 13.88C170.903 14.2266 170.423 14.7066 170.076 15.32C169.756 15.9333 169.596 16.6666 169.596 17.52V30.28H163.596Z"
                                    />
                                    <path
                                        d="M148.381 30.76C146.221 30.76 144.248 30.2666 142.461 29.28C140.701 28.2933 139.288 26.9466 138.221 25.24C137.181 23.5066 136.661 21.5466 136.661 19.36C136.661 17.1466 137.181 15.1866 138.221 13.48C139.288 11.7733 140.701 10.4266 142.461 9.43996C144.248 8.4533 146.221 7.95996 148.381 7.95996C150.541 7.95996 152.501 8.4533 154.261 9.43996C156.021 10.4266 157.421 11.7733 158.461 13.48C159.528 15.1866 160.061 17.1466 160.061 19.36C160.061 21.5466 159.528 23.5066 158.461 25.24C157.421 26.9466 156.021 28.2933 154.261 29.28C152.501 30.2666 150.541 30.76 148.381 30.76ZM148.381 25.36C149.474 25.36 150.421 25.1066 151.221 24.6C152.048 24.0933 152.688 23.3866 153.141 22.48C153.621 21.5733 153.861 20.5333 153.861 19.36C153.861 18.1866 153.621 17.16 153.141 16.28C152.688 15.3733 152.048 14.6666 151.221 14.16C150.421 13.6266 149.474 13.36 148.381 13.36C147.288 13.36 146.328 13.6266 145.501 14.16C144.674 14.6666 144.021 15.3733 143.541 16.28C143.088 17.16 142.861 18.1866 142.861 19.36C142.861 20.5333 143.088 21.5733 143.541 22.48C144.021 23.3866 144.674 24.0933 145.501 24.6C146.328 25.1066 147.288 25.36 148.381 25.36Z"
                                    />
                                    <path
                                        d="M122.112 30.28V8.43995H127.712V13.68L127.312 12.92C127.792 11.08 128.578 9.83995 129.672 9.19995C130.792 8.53329 132.112 8.19995 133.632 8.19995H134.912V13.4H133.032C131.565 13.4 130.378 13.8533 129.472 14.76C128.565 15.64 128.112 16.8933 128.112 18.52V30.28H122.112Z"
                                    />
                                    <path
                                        d="M115.796 30.52C113.156 30.52 111.102 29.8133 109.636 28.4C108.196 26.96 107.476 24.96 107.476 22.4V13.64H103.796V8.43998H103.996C105.116 8.43998 105.969 8.15998 106.556 7.59998C107.169 7.03998 107.476 6.19998 107.476 5.07998V3.47998H113.476V8.43998H118.596V13.64H113.476V22C113.476 22.7466 113.609 23.3733 113.876 23.88C114.142 24.36 114.556 24.72 115.116 24.96C115.676 25.2 116.369 25.32 117.196 25.32C117.382 25.32 117.596 25.3066 117.836 25.28C118.076 25.2533 118.329 25.2266 118.596 25.2V30.28C118.196 30.3333 117.742 30.3866 117.236 30.44C116.729 30.4933 116.249 30.52 115.796 30.52Z"
                                    />
                                    <path d="M94.885 30.28V8.43998H100.885V30.28H94.885ZM94.885 6.47998V0.47998H100.885V6.47998H94.885Z" />
                                    <path
                                        d="M70.9397 30.28V0H76.9397V12.76L76.2197 11.8C76.7264 10.4933 77.5397 9.53333 78.6597 8.92C79.8064 8.28 81.1397 7.96 82.6597 7.96C84.313 7.96 85.753 8.30667 86.9797 9C88.233 9.69333 89.2064 10.6667 89.8997 11.92C90.593 13.1467 90.9397 14.5867 90.9397 16.24V30.28H84.9397V17.52C84.9397 16.6667 84.7664 15.9333 84.4197 15.32C84.0997 14.7067 83.633 14.2267 83.0197 13.88C82.433 13.5333 81.7397 13.36 80.9397 13.36C80.1664 13.36 79.473 13.5333 78.8597 13.88C78.2464 14.2267 77.7664 14.7067 77.4197 15.32C77.0997 15.9333 76.9397 16.6667 76.9397 17.52V30.28H70.9397Z"
                                    />
                                    <path
                                        d="M57.2064 30.76C55.0198 30.76 53.0464 30.2666 51.2864 29.28C49.5531 28.2666 48.1664 26.8933 47.1264 25.16C46.1131 23.4266 45.6064 21.48 45.6064 19.32C45.6064 17.16 46.1131 15.2266 47.1264 13.52C48.1398 11.7866 49.5264 10.4266 51.2864 9.43996C53.0464 8.4533 55.0198 7.95996 57.2064 7.95996C58.8331 7.95996 60.3398 8.23996 61.7264 8.79996C63.1131 9.35996 64.2998 10.1466 65.2864 11.16C66.2731 12.1466 66.9798 13.32 67.4064 14.68L62.2064 16.92C61.8331 15.8266 61.1931 14.96 60.2864 14.32C59.4064 13.68 58.3798 13.36 57.2064 13.36C56.1664 13.36 55.2331 13.6133 54.4064 14.12C53.6064 14.6266 52.9664 15.3333 52.4864 16.24C52.0331 17.1466 51.8064 18.1866 51.8064 19.36C51.8064 20.5333 52.0331 21.5733 52.4864 22.48C52.9664 23.3866 53.6064 24.0933 54.4064 24.6C55.2331 25.1066 56.1664 25.36 57.2064 25.36C58.4064 25.36 59.4464 25.04 60.3264 24.4C61.2064 23.76 61.8331 22.8933 62.2064 21.8L67.4064 24.08C67.0064 25.36 66.3131 26.5066 65.3264 27.52C64.3398 28.5333 63.1531 29.3333 61.7664 29.92C60.3798 30.48 58.8598 30.76 57.2064 30.76Z"
                                    />
                                    <path
                                        d="M31.0569 30.28V8.43995H36.6569V13.68L36.2569 12.92C36.7369 11.08 37.5236 9.83995 38.6169 9.19995C39.7369 8.53329 41.0569 8.19995 42.5769 8.19995H43.8569V13.4H41.9769C40.5102 13.4 39.3236 13.8533 38.4169 14.76C37.5102 15.64 37.0569 16.8933 37.0569 18.52V30.28H31.0569Z"
                                    />
                                    <path d="M0 30.28L10.08 0.47998H18.32L28.4 30.28H21.64L19.64 24.2H8.72L6.72 30.28H0ZM10.44 18.8H17.92L13.36 4.71998H15.04L10.44 18.8Z" />
                                </svg>
                            </span>
                        </a>
                        <h6 className="text-secondary mt-7.5 mb-0 [font-size:_clamp(2rem,7vw,2.6rem)] leading-[1.2] font-extrabold">
                            Welcome<br />
                            back to Architronix
                        </h6>
                        <p className="text-secondary mt-7.5 mb-0">Crafting Architectural Designing and Masterpieces Interior Wonders, Join us on a journey marked by accolades and distinctions as we carve our path in the world of design.</p>
                        <div className="login-page-copyright mt-7.5">
                            <p className="text-secondary mb-0">&copy; {currentYear}, Architronix, All Rights Reserved</p>
                        </div>
                    </div>
                    <div className='login-page-form bg-secondary h-full flex flex-col justify-center px-3.5 lg:px-7.5 py-8.5 lg:py-17.5'>
						<form id="checkOutForm" className="contact-form">
                            <div className='mb-3.5 lg:mb-7.5'>
                                <label className="text-primary mb-1" for="userName">Username or Email Address*</label>
                                <InputFiled id={"userName"} type={"email"} className={'bg-white'} />
                            </div>
                            <div className='mb-3.5 lg:mb-7.5'>
                                <label className="text-primary mb-1" for="usrerPassword">Password*</label>
                                <InputFiled id={"usrerPassword"} type={"password"} className={'bg-white'} />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input id="checkboxRe" type="checkbox" className="border-primary accent-primary rounded-lg h-[18px] w-[18px]" />
                                <label className="text-primary" for="checkboxRe">Remember Me</label>
                            </div>

                            <div className='w-full mt-3.5 lg:mt-7.5'>
                                <ButtonOutline2 className={"w-full"}> Log In <RightArrow height={"22"} width={"35"} /></ButtonOutline2>
                            </div>

                            <p className="text-center mt-3.5 mb-0 opacity-75">
                                <Link href={'/lost-password'} className='underline'>Lost Password?</Link>
                            </p>

                            <p className="create-account text-center mt-3.5 mb-0">
                                <span> Don't have an account? </span>
                                <Link href={'/register'} className='underline'>SignUp</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LoginPage