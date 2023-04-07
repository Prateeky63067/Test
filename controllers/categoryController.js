import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";
export const CreateCategoryController=async(req,res)=>{
    try {
        const {name}=req.body
        if(!name)
        {
            return res.status(401).send({message:"Name is required"})
        }
        const existngCategory=await CategoryModels.findOne({name});
        if(existngCategory)
        {
            return res.status(200).send({
                success:true,
                message:"Category Already Exists"

            })
        }
        const category=await new CategoryModels({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:'new Category created',
            category
        })

    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:"Error in category"

        })
    }
};

// update category

// export const updateCategoryController = async (req, res) => {
//     try {
//       const { name } = req.body;
//       const { id } = req.params;
//       const category = await categoryModel.findByIdAndUpdate(
//         id,
//         { name, slug: slugify(name) },
//         { new: true }
//       );
//       res.status(200).send({
//         success: true,
//         messsage: "Category Updated Successfully",
//         category,
//       });
//     } catch (error) {
//       console.log(error);
//       res.status(500).send({
//         success: false,
//         error,
//         message: "Error while updating category",
//       });
//     }
//   };