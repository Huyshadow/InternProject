
import React from "react";
import "../../style/Storage.css"
import {IoMdArrowRoundBack} from "react-icons/io";
import {Link} from "react-router-dom";
export interface IStorageRouteProps {}
const StorageRoute:React.FunctionComponent<IStorageRouteProps> = () => {
    return(
        <div className="storage_bd">
            <div className="container mt-4">
                <div className="back">
                    <Link to='/'>
                        <IoMdArrowRoundBack size={48} style={{
                            cursor:"pointer"
                        }}/>
                    </Link>
                </div>
                <h1 className="display-4 text-center">
                     My Storage List
                </h1>


                <form id="book-form">
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="author">Price</label>
                        <input type="text" id="author" className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="isbn">Description</label>
                        <input type="text" id="isbn" className="form-control" />
                    </div>
                    <button type="submit" value="Add Book" className="btn btn-primary btn-block" >Submit </button>
                </form>
                <table className="table table-striped mt-5">
                    <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Description</th>

                    </tr>
                    </thead>
                    <tbody id="book-list"></tbody>
                </table>
            </div>
        </div>

)
}
export default StorageRoute;