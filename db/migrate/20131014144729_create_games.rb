class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :winner
      t.boolean :finish

      t.timestamps
    end
  end
end
