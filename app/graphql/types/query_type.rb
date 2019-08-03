module Types
  class QueryType < Types::BaseObject
    field :items,
          [Types::ItemType],
          null: false,
          description: "Returns a list of items in the martian library"

    field :me, Types::UserType, null: true

    def items
      Item.preload(:user)
    end

    def me
      context[:current_user]
    end
  end
end