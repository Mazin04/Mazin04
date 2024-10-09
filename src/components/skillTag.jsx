const SkillTag = ({ name, onClick, isSelected, bgColor}) => {
    const buttonStyles = isSelected
    ? `text-white border-primary-400 ${bgColor}`
    : "text-gray-400 border-gray-500 bg-transparent hover:border-white";
    return (
        <button
        className={`${buttonStyles} rounded-2xl w-40 border-2 px-6 py-3 text-xl cursor-pointer transition-colors duration-300`}
        onClick={() => onClick(name)}>
            {name}
        </button>
    )
}

export default SkillTag;