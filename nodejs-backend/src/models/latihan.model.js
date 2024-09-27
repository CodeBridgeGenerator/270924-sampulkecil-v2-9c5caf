
    module.exports = function (app) {
        const modelName = 'latihan';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            NoRujukan: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
kategori: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
status: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },
tajuk: { type: String, required: true, unique: false, lowercase: false, uppercase: false, index: false, trim: false },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };