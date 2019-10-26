import uuid from 'uuid/v4'

export default (sequelize, DataTypes) => {
  const stock_price = sequelize.define('stock_price', {
    uuid: {
      type: DataTypes.UUID,
      primaryKey: true,
      field: 'uuid'
    },
    stock_uuid: {
      type: DataTypes.UUID
    },
    close_price: {
      type: DataTypes.DECIMAL
    },
    timestamp: {
      type: DataTypes.STRING
    },
    change_price: {
      type: DataTypes.DECIMAL
    },
    change_percent: {
      type: DataTypes.DECIMAL
    }
  }, {
    tableName: 'stock_price',
    timestamps: false
  })
  stock_price["associate"] = (models) => {
    models.stock_price.belongsTo(models.stocks, {
      foreignKey: 'stock_uuid'
    })
  }
  stock_price.beforeCreate((stock_price, _) => {
    return stock_price.uuid = uuid();
  });
  return stock_price;
}