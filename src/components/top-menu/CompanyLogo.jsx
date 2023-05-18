const CompanyLogo = ({img}) => {
    return (
        <div className="border border-black p-2 flex flex-col justify-center">
            <img src={img} className="h-[5rem]" />
        </div>
    );
}

export default CompanyLogo;