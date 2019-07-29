//
//  CounterManager.swift
//  KroonStudio
//
//  Created by Djuro Alfirevic on 7/29/19.
//  Copyright © 2019 Kroon Studio. All rights reserved.
//

import Foundation

class CounterManager {
	
	// MARK: - Properties
	static let shared = CounterManager()
	private(set) var dictionary = [Int:Int]()
	
	// MARK: - Initializer
	private init() {}
	
	// MARK: - Public API
	func value(for user: User) -> Int {
		if let value = dictionary[user.id] {
			return value
		}
		
		return 0
	}
	
	func updateValue(for user: User) {
		if var counter = dictionary[user.id] {
			counter += 1
			dictionary[user.id] = counter
		} else {
			dictionary[user.id] = 1
		}
	}
	
}
