//
//  UserTableViewCell.swift
//  KroonStudio
//
//  Created by Djuro Alfirevic on 7/29/19.
//  Copyright © 2019 Kroon Studio. All rights reserved.
//

import UIKit

class UserTableViewCell: UITableViewCell {

	// MARK: - Properties
	@IBOutlet private weak var userImageView: UIImageView!
	@IBOutlet private weak var nameLabel: UILabel!
	@IBOutlet private weak var counterLabel: UILabel!
	var user: User? {
		didSet {
			setup()
		}
	}
	
	// MARK: - Private API
	private func setup() {
		if let user = user {
			userImageView.loadImage(from: user.url)
			nameLabel.text = user.name
			counterLabel.text = "\(CounterManager.shared.value(for: user))"
		}
	}
	
	// MARK: - Cell lifecycle
	override func prepareForReuse() {
		super.prepareForReuse()
		
		userImageView.image = nil
	}

}

extension UITableViewCell {
	
	class var identifier: String {
		return String(describing: self)
	}
	
}
