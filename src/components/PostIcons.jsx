import React from "react";
import { FaReact, FaJava, FaSquareJs, FaPython, FaCss3Alt, FaGolang, FaBootstrap, FaNodeJs } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { AiOutlinePython } from "react-icons/ai";
import { LiaJsSquare } from "react-icons/lia";

const Icon = ({ icon, len }) => {
    switch (icon) {
        case 'Java':
            return <FaJava className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'Javascript':
            return <LiaJsSquare className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'Python':
            return <AiOutlinePython className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'SQL':
            return <TbSql className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'React':
            return <FaReact className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'CSS':
            return <FaCss3Alt className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'GO':
            return <FaGolang className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'Bootstrap':
            return <FaBootstrap className={"display-" + ((len >= 2) ? '3' : '1')} />;
        case 'NodeJS':
            return <FaNodeJs className={"display-" + ((len >= 2) ? '3' : '1')} />;
    }
}

const PostIcons = ({ list }) => {
    return (
        <div className="col-3 h-100">
            <div className="d-flex row row-cols-2 g-3 justify-content-evenly align-items-center h-100">
                {list.map((item, index) => <Icon icon={item} key={index} len={list.length} />)}
            </div>
        </div>
    )
}

export default PostIcons;