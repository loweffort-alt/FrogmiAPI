class InvalidFeature < ApplicationRecord
  self.inheritance_column = :event_type_column_name
end
