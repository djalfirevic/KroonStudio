//
//  HomeViewController.swift
//  KroonStudio
//
//  Created by Djuro Alfirevic on 7/29/19.
//  Copyright © 2019 Kroon Studio. All rights reserved.
//

import UIKit

class HomeViewController: UITableViewController {

	// MARK: - Properties
	var users = [User]()
	
	// MARK: - View lifecycle
	override func viewDidLoad() {
		super.viewDidLoad()
		
		setupTableView()
		parseData()
	}
	
	// MARK: - Private API
	private func setupTableView() {
		tableView.tableFooterView = UIView()
	}
	
	private func parseData() {
		if let path = Bundle.main.path(forResource: "data", ofType: "json") {
			do {
				let data = try Data(contentsOf: URL(fileURLWithPath: path), options: .mappedIfSafe)
				users = try JSONDecoder().decode([User].self, from: data)
				print("Parsed: \(users.count) users.")
			} catch {
				print("Error: \(error)")
			}
		}
	}

}

extension HomeViewController {
	
	// MARK: - UITableViewDataSource
	override func numberOfSections(in tableView: UITableView) -> Int {
		return 1
	}
	
	override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
		return users.count
	}
	
	override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
		guard let cell = tableView.dequeueReusableCell(withIdentifier: UserTableViewCell.identifier, for: indexPath) as? UserTableViewCell else {
			fatalError("UserTableViewCell couldn't be instantiated")
		}
		
		cell.user = users[indexPath.row]
		
		return cell
	}
	
	// MARK: - UITableViewDelegate
	override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
		let user = users[indexPath.row]
		
		CounterManager.shared.updateValue(for: user)
		tableView.reloadRows(at: [indexPath], with: .automatic)
	}
	
}
